import {useInfiniteQuery, useMutation, useQuery, useQueryClient} from "@tanstack/react-query";

export const useHttpPostRequest = (payload, postFunction, onSuccess, onError, queryKey) => {
  const queryClient = useQueryClient()

  return useMutation(() => postFunction(payload), {
    onSuccess: (data) => {
      onSuccess(data?.data)
    },
    onError,
    onSettled: () => {
      queryClient.invalidateQueries([queryKey])
    }
  })
}

export const useHttpGetRequest = (queryString, requestHandler, data, onSuccess) => {
  return useQuery([queryString, data], () => requestHandler(data), {
    enabled: true,
    retry: false,
    refetchOnWindowFocus: false,
    onSuccess,
    onError: (error) => {
    },
  })
}

export const useMutateRequest = (postFunction, onSuccess, onError, queryKey) => {
  const queryClient = useQueryClient()
  return useMutation(postFunction, {
    onSuccess: (data) => {
      onSuccess(data?.data)
    },
    onError,
    onMutate: () => {
    },
    onSettled: () => {
      queryClient.invalidateQueries([queryKey])
    }
  })
}
export const useGetPaginationRequest = (querySting, requestHandler, data) => {
  return useInfiniteQuery([querySting, data], ({pageParam}) => requestHandler(data, pageParam), {
    retry: false,
    refetchOnWindowFocus: false,
    select: (data) => {
      let updatedData = [];

      data?.pages?.forEach((page) => {
        updatedData = [...updatedData, ...page?.data?.results];
      });

      return updatedData;
    },
  })
}

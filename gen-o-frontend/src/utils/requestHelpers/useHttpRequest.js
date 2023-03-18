import {useMutation} from "@tanstack/react-query";

export const userHttpPostRequest = (payload, postFunction, onSuccess) => {
  // console.log("payload", payload)

  return useMutation(() => postFunction(payload), {
    onSuccess: (data) => {
      onSuccess(data?.data)
    },
    onError: (data) => console.log(data),
  })
}

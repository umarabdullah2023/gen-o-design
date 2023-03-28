import {useHttpGetRequest} from "../../../utils/requestHelpers/useHttpRequest.js";
import {getPatientResult} from "../../../utils/requestHelpers/requestBuilder.js";

export const usePharmacogeneticResult = () => {
  const onSuccess = (data) => {
    console.log(data?.data)
  }
  const {isLoading, isFetching, data} = useHttpGetRequest(
    'get-results', getPatientResult, {}, onSuccess
  )

  return {isLoading, isFetching, data}
}

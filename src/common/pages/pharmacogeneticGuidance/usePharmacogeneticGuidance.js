import {useHttpGetRequest} from "../../../utils/requestHelpers/useHttpRequest.js";
import {getMedicineList, getPatientRecommendation} from "../../../utils/requestHelpers/requestBuilder.js";
import {useState} from "react";

export const usePharmacogeneticGuidance = () => {
  const [pinnedDrug, setPinnedDrug] = useState(null)
  const onSuccess = (data) => {
  }
  const {isLoading, isFetching, data} = useHttpGetRequest(
    'get-recommendation', getPatientRecommendation, {drugs: pinnedDrug}, onSuccess
  )
  const {isLoading: isMedicineListLoading, isMedicineListFetching, data: medicineList,} = useHttpGetRequest(
    'get-med-list', getMedicineList, {}, onSuccess
  )

  return {isLoading, isFetching, data, isMedicineListLoading, medicineList, setPinnedDrug, pinnedDrug}
}

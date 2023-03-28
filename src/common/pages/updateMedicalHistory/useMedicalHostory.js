import {
  useGetPaginationRequest,
  useHttpPostRequest,
  useMutateRequest
} from "../../../utils/requestHelpers/useHttpRequest";
import {
  createMedicalHistory,
  deleteMedicalHistoryRequest,
  getPatientMedicalHistory,
  updateMedicalHistoryRequest
} from "../../../utils/requestHelpers/requestBuilder";
import {useState} from "react";
import FormDataHelpers from "../../../utils/formHelpers/FormDataHelpers.js";
import FormHelpers from "../../../utils/formHelpers/FormHelpers.js";
import {useFormik} from "formik";
import {toast} from "react-toastify";

export const useMedicalHistory = () => {
  const [showModal, setShowModal] = useState(false)
  const [inputFields, setInputFields] = useState(FormDataHelpers.medicalHistoryFields())
  const initialValues = FormHelpers.getFormikInitialValues(inputFields)
  const [selectedRow, setSelectedRow] = useState(null);
  const [modalMode, setModalMode] = useState('ADD')
  const handleSubmit = () => {
    if (modalMode === "ADD") {
      handleMedicalHistorySubmit()
    }
    if (modalMode === "EDIT") {
      updateMedicalHistory({
        id: selectedRow?.id,
        ...FormDataHelpers.buildMedicalHistoryRequestPayload(formik.values)
      })
    }
  };
  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: handleSubmit,
  })
  const onMedicalHistoryCreateSuccess = (data) => {
    setShowModal(false)
    toast.success("Record Added")
  }
  const onMedicalHistoryCreateError = (error) => {
  }
  const {isLoading: isAddMedicalHistoryLoading, mutate: handleMedicalHistorySubmit} = useHttpPostRequest(
    {...FormDataHelpers.buildMedicalHistoryRequestPayload(formik.values)},
    createMedicalHistory,
    onMedicalHistoryCreateSuccess,
    onMedicalHistoryCreateError,
    'get-medical-history',
  )
  const actionButtonProps = {
    isShowEdit: true,
    isShowDelete: true,
    handleEditClick: (row) => {
      setSelectedRow(row)
      formik.setValues({
        drugName: row.drug_name,
        startDate: row.start_date,
        endDate: row.end_date,
      })

    },

    handleDeleteClick: (row) => {
      setSelectedRow(row)
    }
  }
  const {
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
    isLoading,
    data
  } = useGetPaginationRequest('get-medical-history', getPatientMedicalHistory)

  const onDeleteSuccess = (data) => {
    setShowModal(false)
    formik.resetForm()
    toast.success(modalMode === "EDIT" ? "Record Updated" : "Record Deleted")
  }


  const onDeleteError = (error) => {

  }

  const {
    isLoading: idDeleteMedicalHistoryLoading,
    mutate: deleteMedicalHistory
  } = useHttpPostRequest(selectedRow, deleteMedicalHistoryRequest, onDeleteSuccess, onDeleteError, 'get-medical-history')

  const {
    isLoading: isUpdateMedicalHistoryLoading,
    mutate: updateMedicalHistory,
  } = useMutateRequest(updateMedicalHistoryRequest, onDeleteSuccess, onDeleteError, 'get-medical-history')

  const handleDeleteMedicalHistory = () => deleteMedicalHistory()
  return {
    actionButtonProps,
    handleDeleteMedicalHistory,
    selectedRow,
    setSelectedRow,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
    isLoading,
    data,
    formik,
    initialValues,
    inputFields,
    handleSubmit,
    setModalMode,
    showModal,
    setShowModal,
  }
}

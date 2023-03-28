import {useState} from "react";
import FormDataHelpers from "../../../utils/formHelpers/FormDataHelpers.js";
import FormHelpers from "../../../utils/formHelpers/FormHelpers.js";
import {useFormik} from "formik";
import {useHttpPostRequest} from "../../../utils/requestHelpers/useHttpRequest.js";
import {updatePatientProfile} from "../../../utils/requestHelpers/requestBuilder.js";
import {profileSchema} from "../../../utils/formHelpers/formVlidationSchemas.js";
import {toast} from "react-toastify";


export const useProfile = () => {
  const [inputFields, setInputFields] = useState(FormDataHelpers.profileUpdateFields())
  const formInitialValues = FormHelpers.getFormikInitialValues(inputFields)
  const profileFormSchema = profileSchema()
  const handleSubmit = (values) => handleProfileUpdate()
  const formik = useFormik({
    initialValues: formInitialValues,
    validationSchema: profileFormSchema,
    onSubmit: handleSubmit,
  })
  const onSuccess = (data) => {
    toast.success("Profile updated successfully");
  }
  const {isLoading, mutate: handleProfileUpdate} = useHttpPostRequest({
    ...FormDataHelpers.buildUpdatePatientProfileRequestPayload(formik.values)
  }, updatePatientProfile, onSuccess)


  return {isLoading, formik, inputFields}
}

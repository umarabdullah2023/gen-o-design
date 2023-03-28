import {useState} from "react";
import FormDataHelpers from "../../../utils/formHelpers/FormDataHelpers.js";
import FormHelpers from "../../../utils/formHelpers/FormHelpers.js";
import {useFormik} from "formik";
import {useHttpPostRequest} from "../../../utils/requestHelpers/useHttpRequest.js";
import {changePassword} from "../../../utils/requestHelpers/requestBuilder.js";
import {passwordChangeSchema} from "../../../utils/formHelpers/formVlidationSchemas.js";
import {toast} from "react-toastify";

export const usePasswordChange = () => {
  const [inputFields, setInputFields] = useState(FormDataHelpers.passwordChangeFields())
  const initialInputValues = FormHelpers.getFormikInitialValues(inputFields);
  const changePasswordSchema = passwordChangeSchema()

  const handleSubmit = (values) => handleChangePassword();

  const formik = useFormik({
    initialValues: initialInputValues,
    validationSchema: changePasswordSchema,
    onSubmit: handleSubmit
  })
  const onSuccess = (data) => {
    toast.success("Password Updated successfully");
    formik.resetForm()
  }
  const onError = (error) => {
    const response_errors = error?.response?.data?.detail
    if (response_errors && response_errors.length) {
      response_errors.map(item => toast.error(item))
    }
  }
  const {isLoading, mutate: handleChangePassword} = useHttpPostRequest({
    ...FormDataHelpers.buildChangePasswordRequestPayload(formik.values)
  }, changePassword, onSuccess, onError)

  return {isLoading, formik, inputFields}
}

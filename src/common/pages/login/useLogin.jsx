import {useState} from "react";
import FormDataHelpers from "../../../utils/formHelpers/FormDataHelpers.js";
import FormHelpers from "../../../utils/formHelpers/FormHelpers.js";
import {useFormik} from "formik";
import {userHttpPostRequest} from "../../../utils/requestHelpers/useHttpRequest.js";
import {login} from "../../../utils/requestHelpers/requestBuilder.js";
import {useNavigate} from "react-router-dom";

export const useLogin = () => {
  const [inputFields, setInputFields] = useState(FormDataHelpers.loginInputFields());
  const formikInitialValues = FormHelpers.getFormikInitialValues(inputFields);
  const navigate = useNavigate()
  const handleSubmit = (values) => handleLogin();
  const formik = useFormik({
    initialValues: formikInitialValues,
    onSubmit: handleSubmit
  })
  const onSuccess = (data) => {
    const {access, refresh, user} = data;
    console.log(access, refresh, user);
    localStorage.setItem('access_token', access);
    localStorage.setItem('refresh_token', refresh);
    localStorage.setItem('user', user);
    window.location.reload();
  }
  const {isLoading, mutate: handleLogin} = userHttpPostRequest({
    ...FormDataHelpers.buildLoginRequestPayload(formik.values)
  }, login, onSuccess)


  return {inputFields, formik};
}

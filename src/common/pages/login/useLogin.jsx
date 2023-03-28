import {useState} from "react";
import FormDataHelpers from "../../../utils/formHelpers/FormDataHelpers.js";
import FormHelpers from "../../../utils/formHelpers/FormHelpers.js";
import {useFormik} from "formik";
import {useHttpPostRequest} from "../../../utils/requestHelpers/useHttpRequest.js";
import {login} from "../../../utils/requestHelpers/requestBuilder.js";
import {useNavigate} from "react-router-dom";
import {PHARMACOGENETIC_RESULT} from "../../../utils/constants/RouteConstants.js";
import {loginSchema} from "../../../utils/formHelpers/formVlidationSchemas.js";
import {toast} from "react-toastify";

export const useLogin = () => {
  const [inputFields, setInputFields] = useState(FormDataHelpers.loginInputFields());
  const formikInitialValues = FormHelpers.getFormikInitialValues(inputFields);
  const validationSchema = loginSchema()
  const navigate = useNavigate()
  const [loginFailed, setLoginFailed] = useState(false)
  const handleSubmit = (values) => handleLogin();
  const formik = useFormik({
    initialValues: formikInitialValues,
    validationSchema: loginSchema(),
    onSubmit: handleSubmit
  })
  const onSuccess = (data) => {
    const {access, refresh, user} = data;
    console.log(access, refresh, user);
    localStorage.setItem('access_token', access);
    localStorage.setItem('refresh_token', refresh);
    localStorage.setItem('user', JSON.stringify(user));

    if (user?.user_type === 'PATIENT') {
      navigate(PHARMACOGENETIC_RESULT);
      window.location.reload();
    }
  }
  const onError = (error) => {
    if (error?.response?.data?.detail) {
      setLoginFailed(true);
      toast.error("Email or Password incorrect.")
    }
  }
  const {isLoading, mutate: handleLogin} = useHttpPostRequest({
    ...FormDataHelpers.buildLoginRequestPayload(formik.values)
  }, login, onSuccess, onError)


  return {inputFields, formik, loginFailed, isLoading};
}

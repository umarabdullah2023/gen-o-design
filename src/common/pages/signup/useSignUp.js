import {useState} from "react";
import FormDataHelpers from "../../../utils/formHelpers/FormDataHelpers.js";
import FormHelpers from "../../../utils/formHelpers/FormHelpers.js";
import {useFormik} from "formik";
import {userHttpPostRequest} from "../../../utils/requestHelpers/useHttpRequest.js";
import {signUp} from "../../../utils/requestHelpers/requestBuilder.js";
import {useNavigate} from "react-router-dom";
import {LOGIN_ROUTE} from "../../../utils/constants/RouteConstants.js";

export const useSignUp = () => {
  const [inputFields, setInputFields] = useState(FormDataHelpers.signUpInputFields());
  const formikInitialValues = FormHelpers.getFormikInitialValues(inputFields);
  const navigate = useNavigate()
  const handleSubmit = (values) => handleSignUp();
  const formik = useFormik({
    initialValues: formikInitialValues,
    onSubmit: handleSubmit
  })
  const onSuccess = (data) => {
    navigate(LOGIN_ROUTE);
  }
  const {isLoading, mutate: handleSignUp} = userHttpPostRequest({
    ...FormDataHelpers.buildSignUpRequestPayload(formik.values)
  }, signUp, onSuccess)
  // HttpPostRequest(formik.values, signUp)


  return {inputFields, formik};
}

import {useState} from "react";
import FormDataHelpers from "../../../utils/formHelpers/FormDataHelpers.js";
import FormHelpers from "../../../utils/formHelpers/FormHelpers.js";
import {useFormik} from "formik";
import {useHttpPostRequest} from "../../../utils/requestHelpers/useHttpRequest.js";
import {signUp} from "../../../utils/requestHelpers/requestBuilder.js";
import {useNavigate} from "react-router-dom";
import {LOGIN_ROUTE} from "../../../utils/constants/RouteConstants.js";
import {signUpSchema} from "../../../utils/formHelpers/formVlidationSchemas.js";


export const useSignUp = () => {
  const [inputFields, setInputFields] = useState(FormDataHelpers.signUpInputFields());
  const formikInitialValues = FormHelpers.getFormikInitialValues(inputFields);
  const validationSchema = signUpSchema()

  const navigate = useNavigate()
  const handleSubmit = (values) => handleSignUp();
  const formik = useFormik({
    initialValues: {...formikInitialValues, terms: false},
    validationSchema: validationSchema,
    onSubmit: handleSubmit
  })

  const onSuccess = (data) => {
    navigate(LOGIN_ROUTE);
  }
  const onError = (error) => {
    formik.setErrors(
      {
        email: error?.response?.data?.username
      }
    );
    formik.setSubmitting(false);
  }
  const {isLoading, mutate: handleSignUp} = useHttpPostRequest({
    ...FormDataHelpers.buildSignUpRequestPayload(formik.values)
  }, signUp, onSuccess, onError)
  
  return {inputFields, formik, isLoading};
}

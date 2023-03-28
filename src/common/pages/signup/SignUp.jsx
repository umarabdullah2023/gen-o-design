import React from 'react';
// import { useFormik } from 'formik';
import Image from '../../components/Image';
import Button from '../../components/Button';
import {useSignUp} from "./useSignUp.js";
import {InputField, InputFieldTextArea} from "../../components/Form/Input";
import _ from "lodash";

const LoginLink = () => (
  <div className='login-link d-flex'>
    <p>Have an account?</p>
    <p className='login-link-text'>Sign In!</p>
  </div>
);
export default function SignUp() {

  const {inputFields, formik, isLoading} = useSignUp()
  return (
    <div className='signup-page d-flex'>
      <div className='flex-1 signup-container'>
        <div className='form-area-container'>
          <h4 className='sign-up-heading'>Sign up</h4>
          <Form className='custom-form' formik={formik} inputFields={inputFields} isLoading={isLoading}/>
          <LoginLink/>
        </div>
      </div>
      <Image path='login-page-image.png' showWrapper={true} wrapperClassName='signup-side-image'/>
    </div>
  );
};


const Form = ({className, formik, inputFields, isLoading}) => (
  <div className='signup-form-container '>
    <form className={className} onSubmit={(e) => e.preventDefault()}>
      <div className='sign-up-grid d-grid'>
        {
          inputFields.map((inputConfig) => (
            inputConfig.show ? (
              <InputField formik={formik} key={inputConfig.name} name={inputConfig.name}
                          labelText={inputConfig.labelText} type={inputConfig.type}/>
            ) : (<></>)
          ))
        }
      </div>
      <InputFieldTextArea formik={formik} key={"address"} name={"address"} labelText={"Address"} type={"text"}/>

      <div className='input-field-wrapper'>
        <label htmlFor='gender' className='form-label'>
          Gender
        </label>

        <div className='radio-buttons-wrapper d-flex'>
          <div className='form-check radio-button'>
            <input className='form-check-input' type='radio' name='gender' id='male' value="MALE"
                   onChange={formik.handleChange}/>
            <label className='form-check-label' htmlFor='male'>
              Male
            </label>
          </div>
          <div className='form-check radio-button'>
            <input className='form-check-input' type='radio' name='gender' id='female' value="FEMALE"
                   onChange={formik.handleChange}/>
            <label className='form-check-label' htmlFor='female'>
              Female
            </label>
          </div>
          <div className='form-check radio-button'>
            <input className='form-check-input' type='radio' name='gender' id='other' value="other"
                   onChange={formik.handleChange}/>
            <label className='form-check-label' htmlFor='other'>
              Other
            </label>
          </div>
        </div>
        {
          formik && formik.touched.gender && formik.errors.gender && (
            <>
              {
                _.isArray(formik.errors.gender) ? (
                  <>
                    {formik.errors.gender?.map((error) => (
                      <p className='error-field' key={error}>
                        {error}
                      </p>
                    ))}
                  </>
                ) : (
                  <p className='error-field'>{formik.errors.gender}</p>
                )
              }
            </>
          )
        }
      </div>

      <div class='form-check checkbox'>
        <input class='form-check-input' type='checkbox' value="false" id='terms' name="terms"
               onChange={formik.handleChange}/>
        <label class='form-check-label' for='flexCheckDefault'>
          By continuing you indicate that you read and agreed to the Terms of Use
        </label>
        {
          formik && formik.touched.terms && formik.errors.terms && (
            <>
              {
                _.isArray(formik.errors.terms) ? (
                  <>
                    {formik.errors.terms?.map((error) => (
                      <p className='error-field' key={error}>
                        {error}
                      </p>
                    ))}
                  </>
                ) : (
                  <p className='error-field'>{formik.errors.terms}</p>
                )
              }
            </>
          )
        }
      </div>

      <Button text='Sign Up' btnType='secondary' className='signup-button' isTypeSubmit={true}
              onClick={() => formik.handleSubmit()} isLoading={isLoading}/>
    </form>
  </div>
);

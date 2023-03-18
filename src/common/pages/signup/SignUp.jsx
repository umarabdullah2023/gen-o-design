import React from 'react';
// import { useFormik } from 'formik';
import Image from '../../components/Image';
import Button from '../../components/Button';
import {useSignUp} from "./useSignUp.js";


const InputField = ({formik, name, labelText, type}) => (
  <div className='input-field-wrapper'>
    <label htmlFor={name} className='form-label'>
      {labelText}
    </label>
    <input
      className='input-field'
      id={name}
      name={name}
      type={type}
      onChange={formik.handleChange}
      value={formik.values[name]}
    />
  </div>
);

const InputFieldTextArea = ({formik, name, labelText, type}) => (
  <div className='input-field-wrapper'>
    <label htmlFor="address" className='form-label'>
      {labelText}
    </label>
    <textarea
      className='input-field'
      id={name}
      name={name}
      type={type}
      onChange={formik.handleChange}
      value={formik.values[name]}></textarea>
  </div>
);

const LoginLink = () => (
  <div className='login-link d-flex'>
    <p>Have an account?</p>
    <p className='login-link-text'>Sign In!</p>
  </div>
);
export default function SignUp() {
  // const formik = useFormik({
  // 	initialValues: formFieldConfig.reduce(
  // 		(accumulator, currentValue) => ({
  // 			...accumulator,
  // 			[currentValue.name]: '',
  // 		}),{}),
  // 	onSubmit: (values) => {
  // 		alert(JSON.stringify(values, null, 2));
  // 	},
  // });
  const {inputFields, formik} = useSignUp()
  return (
    <div className='signup-page d-flex'>
      <div className='flex-1 signup-container'>
        <div className='form-area-container'>
          <h4 className='sign-up-heading'>Sign up</h4>
          <Form className='custom-form' formik={formik} inputFields={inputFields}/>
          <LoginLink/>
        </div>
      </div>
      <Image path='login-page-image.png' showWrapper={true} wrapperClassName='signup-side-image'/>
    </div>
  );
};


const Form = ({className, formik, inputFields}) => (
  <div className='signup-form-container '>
    <form className={className} onSubmit={formik.handleSubmit}>
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
      </div>

      <div class='form-check checkbox'>
        <input class='form-check-input' type='checkbox' value='' id='flexCheckDefault'/>
        <label class='form-check-label' for='flexCheckDefault'>
          By continuing you indicate that you read and agreed to the Terms of Use
        </label>
      </div>

      <Button text='Sign In' btnType='secondary' className='signup-button'/>
    </form>
  </div>
);

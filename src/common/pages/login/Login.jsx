import React from 'react';
import Image from '../../components/Image';
import Button from '../../components/Button';
import {useLogin} from "./useLogin.jsx";
import {InputField} from "../../components/Form/Input";

const Form = ({className, formik, inputFields, loginFailed, isLoading}) => (
  <div className='login-form-container d-flex justify-content-center'>
    <form className={className} onSubmit={(e) => e.preventDefault()}>
      {
        loginFailed && (<p className="error-field">Email or password incorrect</p>)
      }
      {
        inputFields.map((inputConfig) => (
          <InputField formik={formik} key={inputConfig.name} name={inputConfig.name}
                      labelText={inputConfig.labelText} type={inputConfig.type}/>
        ))
      }
      <p className='forgot-link'>Forgot password</p>
      <Button text='Sign In' btnType='secondary' className='login-button' isTypeSubmit={true}
              onClick={() => formik.handleSubmit()} isLoading={isLoading}/>
    </form>
  </div>
);

const Logo = () => (
  <div className='logo d-flex flex-column align-items-center'>
    {/*<SvgGenOLogoBigIcon/>*/}
    <h5 className='font-inter'>Pharmogene</h5>
  </div>
);

const Tabs = () => (
  <div className='tabs d-flex justify-content-center'>
    <div className='tab active'>
      <p>Patient</p>
    </div>
    <div className='tab'>
      <p>Admin</p>
    </div>
  </div>
);

const SignUpLink = () => (
  <div className='sign-up-link d-flex justify-content-center'>
    <p>Don't have an account?</p>
    <p className='sign-up-link-text'>Sign Up</p>
  </div>
);

export default function Login() {
  const {formik, inputFields, loginFailed, isLoading} = useLogin()


  return (
    <div className='login-page d-flex'>
      <div className='flex-1 login-container flex-center'>
        <div className='form-area-container'>
          <Logo/>
          <Tabs/>
          <Form className='custom-form' formik={formik} inputFields={inputFields} loginFailed={loginFailed}
                isLoading={isLoading}/>
          <SignUpLink/>
        </div>
      </div>
      <Image path='login-page-image.png' showWrapper={true} wrapperClassName='login-side-image'/>
    </div>
  );
}

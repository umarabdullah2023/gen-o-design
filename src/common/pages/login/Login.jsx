import React from 'react';
import Image from '../../components/Image';
import SvgGenOLogoBigIcon from '../../svgs/converted/gen-o-logo-big-icon';
import Button from '../../components/Button';
import {useLogin} from "./useLogin.jsx";

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

const Form = ({className, formik, inputFields}) => (
  <div className='login-form-container d-flex justify-content-center'>
    <form className={className} onSubmit={formik.handleSubmit}>
      {
        inputFields.map((inputConfig) => (
          <InputField formik={formik} key={inputConfig.name} name={inputConfig.name}
                      labelText={inputConfig.labelText} type={inputConfig.type}/>
        ))
      }
      <p className='forgot-link'>Forgot password</p>
      <Button text='Sign In' btnType='secondary' className='login-button'/>
    </form>
  </div>
);

const Logo = () => (
  <div className='logo d-flex flex-column align-items-center'>
    <SvgGenOLogoBigIcon/>
    <h5 className='font-inter'>Gen-O</h5>
  </div>
);

const Tabs = () => (
  <div className='tabs d-flex justify-content-center'>
    <div className='tab'>
      <p>Patient</p>
    </div>
    <div className='tab active '>
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

const formFieldConfig = [
  {
    name: "email",
    labelText: "Email",
    type: "email",
  },
  {
    name: "password",
    labelText: "Password",
    type: "password",
  },
]
export default function Login() {
  const {formik, inputFields} = useLogin()
  // const formik = useFormik({
  //   initialValues: formFieldConfig.reduce(
  //     (accumulator, currentValue) => ({
  //       ...accumulator,
  //       [currentValue.name]: '',
  //     }), {}),
  //   onSubmit: (values) => {
  //     alert(JSON.stringify(values, null, 2));
  //   },
  // });
  // console.log(formik.initialValues);

  return (
    <div className='login-page d-flex'>
      <div className='flex-1 login-container flex-center'>
        <div className='form-area-container'>
          <Logo/>
          <Tabs/>
          <Form className='custom-form' formik={formik} inputFields={inputFields}/>
          <SignUpLink/>
        </div>
      </div>
      <Image path='login-page-image.png' showWrapper={true} wrapperClassName='login-side-image'/>
    </div>
  );
}

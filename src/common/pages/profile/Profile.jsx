import React, {useEffect, useState} from 'react';
import Button from '../../components/Button';
import Heading from '../../components/Heading';
import Image from '../../components/Image';
import Sidebar from '../../components/Sidebar';
import {useHttpGetRequest} from "../../../utils/requestHelpers/useHttpRequest.js";
import {patientProfile} from "../../../utils/requestHelpers/requestBuilder.js";
import {useProfile} from "./useProfile.js";
import {InputField} from "../../components/Form/Input";
import {usePasswordChange} from "./usePasswordChange.js";
import {Loader} from "../../components/Loader.js";

const ProfileForm = ({className, formik, inputFields, isLoading}) => (
  <div className='profile-form-container d-flex justify-content-center'>
    <form className={className} onSubmit={(e) => e.preventDefault()}>
      {
        inputFields.map((inputField) => (
          <InputField formik={formik} type={inputField.type} name={inputField.name} labelText={inputField.labelText}/>
        ))
      }

      <div className='settings-button-wrapper'>
        {/*<Button text='Cancel' btnType='fade' className='settings-button'/>*/}
        <Button text='Update' btnType='secondary' className='settings-button' isTypeSubmit={true}
                onClick={() => formik.handleSubmit()} isLoading={isLoading}/>
      </div>
    </form>
  </div>
);
const ChangePasswordForm = ({className, formik, inputFields, isLoading}) => (
  <div className='profile-form-container d-flex justify-content-center'>
    <form className={className} onSubmit={(e) => e.preventDefault()}>
      {
        inputFields.map((inputField) => (
          <InputField formik={formik} type={inputField.type} name={inputField.name} labelText={inputField.labelText}/>
        ))
      }

      <div className='settings-button-wrapper'>
        {/*<Button text='Cancel' btnType='fade' className='settings-button'/>*/}
        <Button text='Update' btnType='secondary' className='settings-button' isTypeSubmit={true}
                onClick={() => formik.handleSubmit()} isLoading={isLoading}/>
      </div>
    </form>
  </div>
);

export default function Profile() {
  const [showProfile, setShowProfile] = useState(true)
  const [activeTab, setActiveTab] = useState('account')
  const {isLoading: isProfileLoading, formik: profileFormik, inputFields: profileInputFields} = useProfile()
  const {
    isLoading: isPasswordChangeLoading,
    formik: passwordFormik,
    inputFields: passwordInputFields
  } = usePasswordChange()
  const {data, isFetching: isFetchingPatientProfile} = useHttpGetRequest("get-profile", patientProfile, {})

  useEffect(() => {
    if (data) {
      const {first_name, username, patient_profile} = data?.data
      const formValues = {
        fullName: first_name,
        email: username,
        nhsId: patient_profile.nhs_id,
        dob: patient_profile.dob,
      }
      profileFormik.setValues(formValues)
    }
  }, [data])

  return (
    <Sidebar childrenClassName='settings'>
      <Heading heading='Profile'></Heading>

      <div className='profile-container d-flex'>
        <Loader isLoading={isFetchingPatientProfile} loadingType={"CIRCLE"}>
          <div className='profile-detail-left'>
            <div className='person-detail'>
              <div className='person-image'>
                <Image path='profile-image.png'/>
              </div>
              <p className='person-name'>{data?.data?.first_name}</p>
            </div>

            <ul className='tabs list-style-none cursor-pointer'>
              <li className={`flex-center ${showProfile ? 'active' : ''}`} onClick={() => setShowProfile(true)}>Account
              </li>
              <li className={`flex-center ${showProfile ? '' : 'active'}`}
                  onClick={() => setShowProfile(false)}>Password
              </li>
            </ul>
          </div>

          {
            showProfile ? (
              <ProfileForm formik={profileFormik} inputFields={profileInputFields} isLoading={isProfileLoading}/>
            ) : (<ChangePasswordForm formik={passwordFormik} inputFields={passwordInputFields}
                                     isLoading={isPasswordChangeLoading}/>)

          }
        </Loader>
      </div>
    </Sidebar>
  );
}

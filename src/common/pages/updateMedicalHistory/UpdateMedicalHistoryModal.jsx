import React from 'react';
import CustomModal from '../../components/CustomModal';
import {InputField} from "../../components/Form/Input";

const Form = ({className, formik, inputFields}) => (
  <div className='modal-form-container '>
    <form className={className} onSubmit={formik.handleSubmit}>
      {
        inputFields.map((inputConfig) => (
          <React.Fragment key={inputConfig.name}>
            <InputField formik={formik} key={inputConfig.name} name={inputConfig.name}
                        labelText={inputConfig.labelText} type={inputConfig.type}/>
            {inputConfig.breakLine && <div></div>}
          </React.Fragment>
        ))
      }
    </form>
  </div>
);
export default function UpdateMedicalHistoryModal({
                                                    showModal,
                                                    setShowModal,
                                                    formik,
                                                    initialValues,
                                                    inputFields,
                                                    onAfterClose
                                                  }) {


  return (
    <CustomModal
      className='update-medical-history-modal-container'
      showModal={showModal}
      setShowModal={setShowModal}
      closeButton
      heading='Add patient drug history'
      saveButton
      onSave={formik.handleSubmit}
      onAfterClose={onAfterClose}
    >
      <Form formik={formik} inputFields={inputFields}/>
    </CustomModal>
  );
}

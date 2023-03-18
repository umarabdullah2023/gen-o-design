import { useFormik } from 'formik';
import React from 'react';
import CustomModal from '../../components/CustomModal';

export default function UpdateMedicalHistoryModal({ showModal }) {
	const formik = useFormik({
		initialValues: {
			firstName: '',
			lastName: '',
			email: '',
		},
		onSubmit: (values) => {
			alert(JSON.stringify(values, null, 2));
		},
	});

	const InputField = () => (
		<div className='input-field-wrapper'>
			<label htmlFor='firstName' className='form-label'>
				First Name
			</label>
			<input
				className='input-field'
				id='firstName'
				name='firstName'
				type='text'
				onChange={formik.handleChange}
				value={formik.values.firstName}
			/>
		</div>
	);

	const Form = ({ className }) => (
		<div className='modal-form-container '>
			<form className={className} onSubmit={formik.handleSubmit}>
				<InputField />
				<div></div>
				<InputField />
				<InputField />
			</form>
		</div>
	);

	return (
		<CustomModal
			className='update-medical-history-modal-container'
			showModal={showModal}
			closeButton
			heading='Add patient drug history'
			saveButton>
			<Form />
		</CustomModal>
	);
}

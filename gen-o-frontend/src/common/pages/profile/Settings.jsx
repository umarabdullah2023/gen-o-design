import { useFormik } from 'formik';
import React from 'react';
import Button from '../../components/Button';
import Heading from '../../components/Heading';
import Image from '../../components/Image';
import Sidebar from '../../components/Sidebar';

export default function Settings() {
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
				// onChange={formik.handleChange}
				// value={formik.values.firstName}
			/>
		</div>
	);

	const Form = ({ className }) => (
		<div className='login-form-container d-flex justify-content-center'>
			<form className={className} onSubmit={formik.handleSubmit}>
				<InputField />
				<InputField />
				<InputField />
				<InputField />

				{/* <button type='submit'>Submit</button> */}
				<Button text='Sign In' btnType='secondary' className='login-button' />
			</form>
		</div>
	);
	return (
		<Sidebar childrenClassName='settings'>
			<Heading heading='Profile'></Heading>

			<div className='profile-container d-flex'>
				<div className='profile-detail-left'>
					<div className='person-detail'>
						<div className='person-image'>
							<Image path='profile-image.png' />
						</div>
						<p className='person-name'>Jones Ferdinand</p>
					</div>

					<ul className='tabs list-style-none'>
						<li className='flex-center'>Account</li>
						<li className='flex-center active'>Password</li>
					</ul>
				</div>

				<Form />
			</div>
		</Sidebar>
	);
}

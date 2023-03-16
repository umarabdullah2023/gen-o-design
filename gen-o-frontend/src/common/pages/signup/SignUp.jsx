import React from 'react';
import { useFormik } from 'formik';
import Image from '../../components/Image';
import { GenOLogoBigIcon } from '../../svgs/converted';
import SvgGenOLogoBigIcon from '../../svgs/converted/gen-o-logo-big-icon';
import Button from '../../components/Button';

export default function SignUp() {
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

	const InputFieldTextArea = () => (
		<div className='input-field-wrapper'>
			<label htmlFor='firstName' className='form-label'>
				First Name
			</label>
			<textarea
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
		<div className='signup-form-container '>
			<form className={className} onSubmit={formik.handleSubmit}>
				<div className='sign-up-grid d-grid'>
					<InputField />
					<InputField />
					<InputField />
					<InputField />
				</div>
				<InputFieldTextArea />

				<div className='input-field-wrapper'>
					<label htmlFor='firstName' className='form-label'>
						Gender
					</label>

					<div className='radio-buttons-wrapper d-flex'>
						<div class='form-check radio-button'>
							<input class='form-check-input' type='radio' name='flexRadioDefault' id='flexRadioDefault1' />
							<label class='form-check-label' for='flexRadioDefault1'>
								Default radio
							</label>
						</div>
						<div class='form-check radio-button'>
							<input class='form-check-input' type='radio' name='flexRadioDefault' id='flexRadioDefault1' />
							<label class='form-check-label' for='flexRadioDefault1'>
								Default radio
							</label>
						</div>
					</div>
				</div>

				<div class='form-check checkbox'>
					<input class='form-check-input' type='checkbox' value='' id='flexCheckDefault' />
					<label class='form-check-label' for='flexCheckDefault'>
						Default checkbox
					</label>
				</div>

				<Button text='Sign In' btnType='secondary' className='signup-button' />
			</form>
		</div>
	);

	const LoginLink = () => (
		<div className='login-link d-flex'>
			<p>Don't have an account?</p>
			<p className='login-link-text'>Sign Up</p>
		</div>
	);

	return (
		<div className='signup-page d-flex'>
			<div className='flex-1 signup-container'>
				<div className='form-area-container'>
					<h4 className='sign-up-heading'>Sign up</h4>
					<Form className='custom-form' />
					<LoginLink />
				</div>
			</div>
			<Image path='login-page-image.png' showWrapper={true} wrapperClassName='signup-side-image' />
		</div>
	);
}

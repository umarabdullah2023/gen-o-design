import React from 'react';
import { useFormik } from 'formik';
import Image from '../components/Image';
import { GenOLogoBigIcon } from '../svgs/converted';
import SvgGenOLogoBigIcon from '../svgs/converted/gen-o-logo-big-icon';
import Button from '../components/Button';

export default function Login() {
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
		<div className='login-form-container d-flex justify-content-center'>
			<form className={className} onSubmit={formik.handleSubmit}>
				<InputField />
				<InputField />
				<InputField />
				<InputField />
				{/* <button type='submit'>Submit</button> */}
				<Button />
			</form>
		</div>
	);

	const Logo = () => (
		<div className='logo d-flex flex-column align-items-center'>
			<SvgGenOLogoBigIcon />
			<h5 className='font-inter'>Gen-O</h5>
		</div>
	);

	const Tabs = () => (
		<div className='tabs d-flex justify-content-center'>
			<div className='tab active'>
				<p>Login</p>
			</div>
			<div className='tab'>
				<p>Register</p>
			</div>
		</div>
	);

	return (
		<div className='login-page d-flex'>
			<div className='flex-1'>
				<div className='form-area-container'>
					<Logo />
					<Tabs />
					<Form className='custom-form' />
				</div>
			</div>
			<Image path='login-page-image.png' showWrapper={true} wrapperClassName='login-side-image' />
		</div>
	);
}

import React from 'react';
import WrapperClass from './WrapperClass';

export default function Button({
	styleType,
	className,
	isTypeSubmit,
	onClick,
	isWrapClass,
	wrapperClassName = '',
	text,
	isLoading,
	disabled,
	disableOpacity,
}) {
	return (
		<WrapperClass isWrapClass={isWrapClass || false} className={wrapperClassName}>
			<button
				className={`btn btn-${styleType} ${className} ${disabled ? 'disabled' : ''} ${
					disableOpacity ? 'disable-opacity' : ''
				}`}
				type={isTypeSubmit ? 'submit' : undefined}
				onClick={disabled ? undefined : onClick}>
				{isLoading ? (
					<div className='button-loader'>{/* <CircularProgress color='secondary' size={20} thickness={4} /> */}</div>
				) : (
					<p>{text}</p>
				)}
			</button>
		</WrapperClass>
	);
}

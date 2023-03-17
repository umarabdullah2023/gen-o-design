// import { CircularProgress } from '@mui/material';
import React, { useEffect } from 'react';
// import { CrossIcon } from '../../svgs/converted';
// import TooltipDisabledButton from '../tooltipButton/TooltipDisabledButton';
import ReactModal from 'react-modal';
import { CrossButton, CrossIcon } from '../svgs/converted';

const CustomModal = (props) => {
	const {
		heading,
		closeButton,
		headingDetailText,
		buttonAlignment,
		cancelButton,
		setShowModal,
		saveButton,
		saveButtonText,
		deleteButton,
		showModal,
		overlayClassName,
		className,
		children,
		onSave,
		onClose,
		onCancel,
		onDelete,
		onAfterClose,
		shouldCloseOnOverlayClick,
		deleteButtonText,
		saveButtonClassName,
		isDisableSave,
		isLoading,
		disableTooltip,
		closeOnPermissionChange = true,
	} = props;

	const Heading = () => (
		<div className='modal-heading-row d-flex justify-content-between'>
			<h3 className='heading-modal align-items-center'>{heading}</h3>
			{closeButton && (
				<div
					className='modal-cross-button align-items-center justify-content-end cursor-pointer self-center'
					onClick={onClose ? onClose : () => setShowModal(false)}>
					<CrossButton />
				</div>
			)}
		</div>
	);
	const HeadingDetailText = () => (
		<div className='row mt-1'>
			<div className='col-sm'>{headingDetailText}</div>
		</div>
	);

	const Loading = () => (
		<div className='button-loader'>{/* <CircularProgress color='secondary' size={20} thickness={4} /> */}</div>
	);

	const ModalButtons = () => (
		<div className='modal-buttons mt-2'>
			<div className={'modal-buttons-children justify-content-end ' + (buttonAlignment || '')}>
				{/* {cancelButton && (
					<div
						className='cancel-button btn btn-fade display-inline '
						onClick={onCancel ? onCancel : () => setShowModal(false)}>
						<p>Cancel</p>
					</div>
				)} */}
				{saveButton && (
					<button
						className={`save-button btn btn-secondary btn-md display-inline ${saveButtonClassName || ''} ${
							isDisableSave ? 'disabled' : ''
						}`}
						onClick={onSave}>
						<>{isLoading ? <Loading /> : saveButtonText || 'Save'}</>
					</button>
				)}
				{deleteButton && (
					<div className='delete-button btn btn-red display-inline ' onClick={onDelete}>
						<p>{isLoading ? <Loading /> : deleteButtonText || 'Delete'}</p>
					</div>
				)}
			</div>
		</div>
	);

	return (
		<ReactModal
			isOpen={showModal}
			overlayClassName={`overlay-custom-modal flex-center ${overlayClassName}`}
			className={`custom-modal ${className}`}
			onAfterClose={onAfterClose}
			shouldCloseOnEsc
			shouldCloseOnOverlayClick={shouldCloseOnOverlayClick}
			onRequestClose={() => setShowModal(false)}
			ariaHideApp={false}>
			<Heading />
			{headingDetailText && <HeadingDetailText />}
			{children}
			<ModalButtons />
		</ReactModal>
	);
};

export default CustomModal;

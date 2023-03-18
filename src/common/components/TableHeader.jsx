import React from 'react';
import Button from '../../common/components/Button';

export default function TableHeader({ tableHeaderText, action }) {
	return (
		<div className='table-header d-flex justify-content-between'>
			<h5 className='table-header-text'>{tableHeaderText}</h5>
			<div className='table-header-action'>
				{action === 'showButton' ? (
					<Button btnType='secondary' text='Add' className='btn-sm' />
				) : action === 'showSearchBar' ? (
					<input type='text' placeholder='Search' />
				) : null}
			</div>
		</div>
	);
}

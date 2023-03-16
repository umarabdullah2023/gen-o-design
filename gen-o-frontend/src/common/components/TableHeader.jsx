import React from 'react';

export default function TableHeader({ tableHeaderText, action }) {
	return (
		<div className='table-header'>
			<div className='table-header-text'>{tableHeaderText}</div>
			<div className='table-header-action'>
				{action === 'showButton' ? (
					<button className='btn btn-primary'>Add</button>
				) : action === 'showSearchBar' ? (
					<input type='text' placeholder='Search' />
				) : null}
			</div>
		</div>
	);
}

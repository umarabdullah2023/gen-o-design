import React from 'react';
import { CrossIcon, SearchBluePageHeaderIcon } from '../svgs/converted';
import Button from './Button';

export default function PageSearchBar() {
	const searchList = ['Lansoprazole', 'Lansoprazole', 'Lansoprazole'];

	return (
		<div className='update-medical-hostory-search-bar'>
			<div className='search-with-button d-flex position-relative'>
				<input
					className='input-field'
					id='firstName'
					name='firstName'
					type='text'
					placeholder='Search'
					// onChange={formik.handleChange}
					// value={formik.values.firstName}
				/>
				<div className='search-icon flex-center'>
					<SearchBluePageHeaderIcon />
				</div>
				<Button btnType='secondary' text='Add' className='btn-sm' />
			</div>
			<ul className='search-result-list list-style-none d-flex'>
				{searchList.map((item, index) => (
					<li className='d-flex' key={index}>
						<div className='cross-button flex-center'>
							<CrossIcon />
						</div>
						<p>{item}</p>
					</li>
				))}
			</ul>
		</div>
	);
}

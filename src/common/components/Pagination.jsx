import React from 'react';
import { NextPaginationIcon } from '../svgs/converted';

export default function Pagination() {
	return (
		<div className='pagination d-flex justify-content-center'>
			<div className='back-button'>
				<NextPaginationIcon />
			</div>
			<ul className='list-style-none d-flex'>
				<li className='active'>1</li>
				<li>2</li>
				<li>3</li>
				<li>4</li>
				<li>5</li>
			</ul>
			<div className='next-button'>
				<NextPaginationIcon />
			</div>
		</div>
	);
}

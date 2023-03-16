import React from 'react';

export default function Heading({ heading, children }) {
	return (
		<div className='common-heading'>
			<div className='header d-flex justify-content-between'>
				<h3>{heading}</h3>
				<p className='profile-person-name'>John Fernantus</p>
			</div>
			<div className='heading-children'>{children}</div>
		</div>
	);
}

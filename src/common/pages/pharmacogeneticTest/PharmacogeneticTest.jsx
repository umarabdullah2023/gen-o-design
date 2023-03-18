import React from 'react';
import Button from '../../components/Button';
import CustomModal from '../../components/CustomModal';
import Heading from '../../components/Heading';
import Sidebar from '../../components/Sidebar';

export default function PharmacogeneticTest() {
	return (
		<Sidebar childrenClassName='pharmacogenetic-test'>
			<Heading heading='Pharmacogenetic Test' />
			<div className='test-options flex-center'>
				<div className='test-options-buttons d-flex justify-content-center'>
					<Button btnType='secondary' text='Add an existing test' className='' />
					<Button btnType='dark-blue' text='Request for new test' className='' />
				</div>
			</div>
		</Sidebar>
	);
}

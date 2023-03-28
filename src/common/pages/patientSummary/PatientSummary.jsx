import React, { useState } from 'react';
import DataTable from 'react-data-table-component';
import Sidebar from '../../components/Sidebar';
import Heading from '../../components/Heading';
import EditTableIcon from '../../svgs/converted/edit-table-icon';
import { DeleteTableIcon, TableBackButtonIcon } from '../../svgs/converted';
import TableHeader from '../../components/TableHeader';
import PageSearchBar from '../../components/PageSearchBar';
import Pagination from '../../components/Pagination';

export default function PatientSummary() {
	const columns = [
		{
			name: 'Title',
			selector: (row) => row.title,
		},
		{
			name: 'Year',
			selector: (row) => row.year,
		},
		{
			name: 'Actions',
			selector: (row) => <TableIcons />,
		},
	];

	const TableIcons = () => (
		<div className='table-icons d-flex'>
			<div className='table-icon edit-icon '>
				<EditTableIcon />
			</div>
			<div className='table-icon delete-icon'>
				<DeleteTableIcon />
			</div>
		</div>
	);

	const data = [
		{
			id: 1,
			title: 'Beetlejuice',
			year: '1988',
		},
		{
			id: 2,
			title: 'Ghostbusters',
			year: '1984',
		},
		{
			id: 2,
			title: 'Ghostbusters',
			year: '1984',
		},
		{
			id: 2,
			title: 'Ghostbusters',
			year: '1984',
		},
		{
			id: 2,
			title: 'Ghostbusters',
			year: '1984',
		},
		{
			id: 2,
			title: 'Ghostbusters',
			year: '1984',
		},
		{
			id: 2,
			title: 'Ghostbusters',
			year: '1984',
		},
		{
			id: 2,
			title: 'Ghostbusters',
			year: '1984',
		},
		{
			id: 2,
			title: 'Ghostbusters',
			year: '1984',
		},
		{
			id: 2,
			title: 'Ghostbusters',
			year: '1984',
		},
		{
			id: 2,
			title: 'Ghostbusters',
			year: '1984',
		},
	];

	const [patientName, setPatientName] = useState(null);

	const getTableHeaderText = () => {
		return (
			<div className='table-header-text-container d-flex'>
				{patientName && <div className='back-button'>{<TableBackButtonIcon />} </div>}{' '}
				<p>{patientName ? patientName : 'Patient'} Login Activity</p>
			</div>
		);
	};

	return (
		<Sidebar childrenClassName='patient-summary'>
			<Heading heading='Patient Summary'></Heading>
			<TableHeader tableHeaderText={getTableHeaderText()} isShowSearch />
			<div className='data-table '>
				<DataTable columns={columns} data={data} />
			</div>
			<Pagination />
		</Sidebar>
	);
}

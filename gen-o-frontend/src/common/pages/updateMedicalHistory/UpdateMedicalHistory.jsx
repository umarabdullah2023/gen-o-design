import React from 'react';
import DataTable from 'react-data-table-component';
import Sidebar from '../../components/Sidebar';
import Heading from '../../components/Heading';
import EditTableIcon from '../../svgs/converted/edit-table-icon';
import { CrossIcon, DeleteTableIcon, SearchBluePageHeaderIcon } from '../../svgs/converted';
import TableHeader from '../../components/TableHeader';
import Button from '../../components/Button';
import Pagination from '../../components/Pagination';
import PageSearchBar from '../../components/PageSearchBar';
import UpdateMedicalHistoryModal from './UpdateMedicalHistoryModal';

export default function UpdateMedicalHistory() {
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
	];

	return (
		<Sidebar childrenClassName='update-medical-hostory'>
			<Heading heading='Update Medical History'>
				<PageSearchBar />
			</Heading>
			<TableHeader tableHeaderText='Patient Drug history' action='showButton' />
			<div className='data-table update-medical-history-table '>
				<DataTable columns={columns} data={data} />
			</div>
			<Pagination />

			<UpdateMedicalHistoryModal showModal={false} />
		</Sidebar>
	);
}

import React from 'react';
import DataTable from 'react-data-table-component';
import Sidebar from '../../components/Sidebar';
import Heading from '../../components/Heading';
import EditTableIcon from '../../svgs/converted/edit-table-icon';
import { DeleteTableIcon } from '../../svgs/converted';
import TableHeader from '../../components/TableHeader';
import PageSearchBar from '../../components/PageSearchBar';

export default function PharmacogeneticResults() {
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

	return (
		<Sidebar>
			<Heading heading='Pharmacogenetic Results'>
				<PageSearchBar />
			</Heading>
			<div className='data-table pharmacogenetic-results-table top-edges-curved'>
				<DataTable columns={columns} data={data} />
			</div>
		</Sidebar>
	);
}

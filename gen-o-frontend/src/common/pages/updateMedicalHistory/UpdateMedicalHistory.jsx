import React from 'react';
import DataTable from 'react-data-table-component';
import Sidebar from '../../components/Sidebar';
import Heading from '../../components/Heading';
import EditTableIcon from '../../svgs/converted/edit-table-icon';
import { CrossIcon, DeleteTableIcon, SearchBluePageHeaderIcon } from '../../svgs/converted';
import TableHeader from '../../components/TableHeader';
import Button from '../../components/Button';
import Pagination from '../../components/Pagination';

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

	const SearchBar = () => {
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
	};

	return (
		<Sidebar childrenClassName='update-medical-hostory'>
			<Heading heading='Update Medical History'>
				<SearchBar />
			</Heading>
			<TableHeader tableHeaderText='Patient Drug history' action='showButton' />
			<div className='data-table pharmacogenetic-results-table'>
				<DataTable columns={columns} data={data} />
			</div>
			<Pagination />
		</Sidebar>
	);
}

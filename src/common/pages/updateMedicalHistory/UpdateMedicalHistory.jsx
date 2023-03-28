import React from 'react';
import DataTable from 'react-data-table-component';
import Sidebar from '../../components/Sidebar';
import Heading from '../../components/Heading';
import EditTableIcon from '../../svgs/converted/edit-table-icon';
import {DeleteTableIcon} from '../../svgs/converted';
import TableHeader from '../../components/TableHeader';
import UpdateMedicalHistoryModal from './UpdateMedicalHistoryModal';
import {useMedicalHistory} from "./useMedicalHostory";
import {Loader} from "../../components/Loader.js";
import _ from 'lodash';

export default function UpdateMedicalHistory() {
  const columns = [
    {
      name: 'Drug Name',
      selector: (row) => _.startCase(row.drug_name),
    },
    {
      name: 'Actions',
      selector: (row) => <TableIcons row={row} actionButtonProps={actionButtonProps}
                                     handleDeleteMedicalHistory={handleDeleteMedicalHistory}/>,
    },
  ];

  const TableIcons = ({row, actionButtonProps, handleDeleteMedicalHistory}) => (
    <div className='table-icons d-flex'>
      {
        actionButtonProps.isShowEdit ? (
          <div className='table-icon edit-icon '>
            <EditTableIcon onClick={() => {
              setShowModal(true);
              setModalMode("EDIT")
              actionButtonProps.handleEditClick(row)
            }
            }/>
          </div>
        ) : (<></>)
      }
      {
        actionButtonProps.isShowDelete ? (
          <div className='table-icon delete-icon'>
            <DeleteTableIcon onClick={() => {
              handleDeleteMedicalHistory()
              actionButtonProps.handleDeleteClick(row)
            }}/>
          </div>
        ) : (<></>)
      }
    </div>
  );

  const {
    actionButtonProps,
    handleDeleteMedicalHistory,
    selectedRow,
    setSelectedRow,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
    isLoading,
    data, showModal, setShowModal,
    formik, initialValues, inputFields, handleSubmit, setModalMode
  } = useMedicalHistory()


  return (
    <Sidebar childrenClassName='update-medical-hostory'>
      <Heading heading='Update Medical History'>
        {/*<PageSearchBar/>*/}
      </Heading>
      <TableHeader tableHeaderText='Patient Drug history' action='showButton' showModal={showModal}
                   setShowModal={setShowModal}/>
      <Loader isLoading={isLoading} loadingType={"THREE-DOT"}>
        <div className='data-table update-medical-history-table '>
          <DataTable columns={columns} data={data}/>
        </div>
      </Loader>

      {/*<Pagination/>*/}

      <UpdateMedicalHistoryModal
        showModal={showModal}
        onAfterClose={() => setModalMode("ADD")}
        setShowModal={setShowModal}
        formik={formik}
        initialValues={initialValues}
        inputFields={inputFields}/>

    </Sidebar>
  );
}

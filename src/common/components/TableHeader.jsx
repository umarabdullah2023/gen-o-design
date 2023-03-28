import React from 'react';
import Button from '../../common/components/Button';

export default function TableHeader({tableHeaderText, action, setShowModal, showModal}) {
  const toggleModal = () => {
    setShowModal(!showModal)
  }
  return (
    <div className='table-header d-flex justify-content-between'>
      <h5 className='table-header-text'>{tableHeaderText}</h5>
      <div className='table-header-action'>
        {action === 'showButton' ? (
          <Button btnType='secondary' text='Add Record' className='btn-sm' onClick={toggleModal}/>
        ) : action === 'showSearchBar' ? (
          <input type='text' placeholder='Search'/>
        ) : null}
      </div>
    </div>
  );
}

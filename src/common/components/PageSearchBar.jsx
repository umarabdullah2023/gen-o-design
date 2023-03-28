import React from 'react';
import {CrossIcon, SearchBluePageHeaderIcon} from '../svgs/converted';
import Select, {components} from 'react-select';

const options = [
  {value: 'chocolate', label: 'Chocolate'},
  {value: 'strawberry', label: 'Strawberry'},
  {value: 'vanilla', label: 'Vanilla'}
]
const customIndicator = (props) => {
  return (
    <components.DropdownIndicator {...props}>
      <SearchBluePageHeaderIcon/>
    </components.DropdownIndicator>
  );
};
export default function PageSearchBar({options, handleSelectChange, selectedDrugList, handleDeleteDrugFromList}) {

  return (
    <div className='update-medical-hostory-search-bar'>
      {/*<div className='search-with-button d-flex position-relative'>*/}
      {/*  <input*/}
      {/*    className='input-field'*/}
      {/*    id='firstName'*/}
      {/*    name='firstName'*/}
      {/*    type='text'*/}
      {/*    placeholder='Search'*/}
      {/*    // onChange={formik.handleChange}*/}
      {/*    // value={formik.values.firstName}*/}
      {/*  />*/}
      {/*  <div className='search-icon flex-center'>*/}
      {/*    <SearchBluePageHeaderIcon/>*/}
      {/*  </div>*/}
      {/*  <Button btnType='secondary' text='Add' className='btn-sm'/>*/}
      {/*</div>*/}
      <div className="search-dropdown">
        <Select options={options} className={"select"} placeholder={"Select Drug"} onChange={handleSelectChange}
                components={{DropdownIndicator: customIndicator}}/>
      </div>
      <ul className='search-result-list list-style-none d-flex'>
        {selectedDrugList.map((item, index) => (
          <li className='d-flex' key={index}>
            <div className='cross-button flex-center'>
              <CrossIcon onClick={() => handleDeleteDrugFromList(index)}/>
            </div>
            <p>{item.label}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

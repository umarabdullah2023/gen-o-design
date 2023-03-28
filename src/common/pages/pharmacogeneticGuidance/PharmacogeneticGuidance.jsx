import React, {useEffect, useState} from 'react';
import DataTable from 'react-data-table-component';
import Sidebar from '../../components/Sidebar';
import Heading from '../../components/Heading';
import PageSearchBar from '../../components/PageSearchBar';
import {usePharmacogeneticGuidance} from "./usePharmacogeneticGuidance.js";
import _ from 'lodash'
import {Loader} from "../../components/Loader.js";

import convert from 'color-convert';

const columns = [
  {
    name: 'Drug Name',
    selector: (row) => _.startCase(row?.drug),
  },
  {
    name: 'Gene',
    selector: (row) => Object.keys(row?.phenotype)[0],
  },
  {
    name: 'Metabolizer Status',
    selector: (row) => _.startCase(row?.phenotype[Object.keys(row?.phenotype)[0]]),
  },
  {
    name: 'Interpretation',
    selector: (row) => row.interpretation,
  },
  {
    name: 'Guidance',
    selector: (row) => row.guidance,
  },
  {
    name: 'Detail',
    selector: (row) => row.detail,
  },
];

const conditionalRowStyles = [
  {
    when: (row) => true,
    style: row => ({
      backgroundColor: `rgba(${convert.keyword.rgb(row.color).join(", ")}, 0.5)`,
    })
  }
];

export default function PharmacogeneticGuidance() {

  const [selectOptions, setSelectOptions] = useState(null)
  const [selectedDrugList, setSelectedDrugList] = useState([])
  const [recommendations, setRecommendations] = useState([])
  const [filteredRecommendations, setFilteredRecommendations] = useState([])
  const {
    isLoading,
    isFetching,
    data,
    medicineList,
    isMedicineListLoading,
    pinnedDrug,
    setPinnedDrug
  } = usePharmacogeneticGuidance()
  // const {
  //   isLoading: isMedicalHistoryLoading,
  //   data: medicalHistoryData,
  // } = useMedicalHistory()


  useEffect(() => {
    if (medicineList && medicineList?.data) {
      console.log({medicineList})
      const op = medicineList?.data.map(({id, name}) => ({
        value: id.toString(),
        label: _.startCase(name)
      }));
      setSelectOptions(op)
    }
  }, [medicineList])

  useEffect(() => {
    if (data) {
      setRecommendations(data?.data)
      setFilteredRecommendations(data?.data)
    }
  }, [data])
  const handleSelectChange = (selectedOption) => {
    setSelectedDrugList([...selectedDrugList, selectedOption])
  }

  useEffect(() => {
    const drugs = selectedDrugList.map(item => _.lowerCase(item.label))
    // if (drugs.length) {
    //   setFilteredRecommendations([...recommendations].filter((item, i) => drugs.includes(item?.drug)))
    // } else {
    //   setFilteredRecommendations([...recommendations])
    // }
    setPinnedDrug(drugs.join(','))
  }, [selectedDrugList])


  const handleDeleteDrugFromList = (index) => {
    setSelectedDrugList(selectedDrugList.filter((item, i) => i !== index))
  }

  useEffect(() => {
    console.log({pinnedDrug})
  }, [pinnedDrug])
  return (
    <Sidebar>
      <Heading heading='Pharmacogenetic Guidance'>
        <PageSearchBar options={selectOptions} handleSelectChange={handleSelectChange}
                       selectedDrugList={selectedDrugList} handleDeleteDrugFromList={handleDeleteDrugFromList}/>
      </Heading>

      <Loader isLoading={isLoading} loadingType={"THREE-DOT"}>
        <div className='data-table pharmacogenetic-results-table top-edges-curved'>
          <DataTable columns={columns} data={filteredRecommendations} conditionalRowStyles={conditionalRowStyles}/>
        </div>
      </Loader>

    </Sidebar>
  );
}

import React from 'react';
import DataTable from 'react-data-table-component';
import Sidebar from '../../components/Sidebar';
import Heading from '../../components/Heading';
import {Loader} from "../../components/Loader.js";
import {usePharmacogeneticResult} from "./usePharmacogeneticResult.jsx";
import _ from 'lodash'

const columns = [
  {
    name: 'Gene',
    selector: (row) => row?.gene,
  },
  {
    name: 'Genotype',
    selector: (row) => row?.dip,
  },
  {
    name: 'Phenotype',
    selector: (row) => _.startCase(row?.met_response),
  },
];


export default function PharmacogeneticResult() {
  const {isLoading, isFetching, data} = usePharmacogeneticResult()

  return (
    <Sidebar>
      <Heading heading='Pharmacogenetic Results'>
      </Heading>

      <Loader isLoading={isLoading} loadingType={"THREE-DOT"}>
        <div className='data-table pharmacogenetic-results-table top-edges-curved'>
          <DataTable columns={columns} data={data?.data}/>
        </div>
      </Loader>

    </Sidebar>
  );
}

import React from 'react';
import {
  GridComponent, ColumnsDirective, ColumnDirective,
  Page, Inject, Search,
} from '@syncfusion/ej2-react-grids';

import {
  employeesData, employeesGrid
} from '../data/dummy';
import { Header } from '../components';

const Emploees = () => {
  const toolbarOptions = ['Search'];

  const editing = { allowDeleting: true, allowEditing: true };

  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category="Page" title="Orders" />
      <GridComponent
        id="gridcomp"
        dataSource={employeesData}
        allowPaging
        allowSorting
        toolbar={toolbarOptions}
        pageSettings={{ pageCount: 5 }}
        widtn="auto"
      >
        <ColumnsDirective>
          {employeesGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />

          ))}
        </ColumnsDirective>
        <Inject services={[Page, Search]} />

      </GridComponent>
    </div>
  )
}

export default Emploees
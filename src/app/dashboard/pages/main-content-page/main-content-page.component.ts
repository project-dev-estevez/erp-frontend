import { Component, OnInit } from '@angular/core';
import { TableColumn } from '../../../shared/interfaces/table-column';
import { TableConfig } from '../../../shared/interfaces/table-config';

const CUSTOMERS_DATA_MOCK = [
  {
    name: 'Pedro',
    lastName: 'Pérez',
    birthdate: new Date(2000, 0, 1),
    country: 'España',
  },
  {
    name: 'Maria',
    lastName: 'Lopez',
    birthdate: new Date(2001, 2, 1),
    country: 'Grecia',
  },
  {
    name: 'Alejandro',
    lastName: 'Pinzon',
    birthdate: new Date(1999, 5, 10),
    country: 'Colombia',
  },
  {
    name: 'Jessica',
    lastName: 'Chastain',
    birthdate: new Date(2000, 0, 1),
    country: 'Perú',
  },
];

@Component({
  selector: 'app-main-content-page',
  templateUrl: './main-content-page.component.html',
  styleUrl: './main-content-page.component.scss'
})

export class MainContentPageComponent implements OnInit {
  customersList = CUSTOMERS_DATA_MOCK;
  tableColumns: TableColumn[] = []
  tableConfig: TableConfig = {
    isSelectable: true,
  }

  ngOnInit(): void {
    this.setTableColumns();
  }


  setTableColumns() {
    this.tableColumns = [
      { label: 'Name', def: 'name', dataKey: 'name' },
      { label: 'Last Name', def: 'lastName', dataKey: 'lastName' },
      {
        label: 'Birthdate',
        def: 'birthdate',
        dataKey: 'birthdate',
        dataType: 'date',
        formatt: 'dd MMM yyyy',
      },
      { label: 'Country', def: 'country', dataKey: 'country' },
    ];
  }

  onSelect(data: any) {
    console.log(data) // muestra la información de la tabla seleciónando con el checkbox
  }

}



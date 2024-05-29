import { Component } from '@angular/core';
import { TableColumn } from '../../../shared/interfaces/table-column';

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
export class MainContentPageComponent {
  customersList = CUSTOMERS_DATA_MOCK;
  tableColumns: TableColumn[] = []


  setTableColumns() {
    this.tableColumns = [
      {label: 'Name', def: 'name', datakey: 'name' },
      {label: 'Name', def: 'name', datakey: 'name' },
      {label: 'Name', def: 'name', datakey: 'name' },
      {label: 'Name', def: 'name', datakey: 'name' },
    ];
  };


}



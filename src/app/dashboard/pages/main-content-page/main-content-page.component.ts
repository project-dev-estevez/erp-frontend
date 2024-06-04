import { Component, OnInit } from '@angular/core';
import { TableColumn } from '../../../shared/interfaces/table-column';
import { TableConfig } from '../../../shared/interfaces/table-config';
import { TableAction } from '../../../shared/interfaces/table-action';
import { TABLE_ACTION } from '../../../shared/enums/table-action.enum';

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
  {
    name: 'Jessica2',
    lastName: 'Chastain2',
    birthdate: new Date(2000, 0, 1),
    country: 'Perú',
  },
  {
    name: 'Jessica3',
    lastName: 'Chastain3',
    birthdate: new Date(2000, 0, 1),
    country: 'Perú',
  },
  {
    name: 'Jessica4',
    lastName: 'Chastain4',
    birthdate: new Date(2000, 0, 1),
    country: 'Perú',
  },
  {
    name: 'Jessica5',
    lastName: 'Chastain5',
    birthdate: new Date(2000, 0, 1),
    country: 'Perú',
  },
  {
    name: 'Jessica4',
    lastName: 'Chastain4',
    birthdate: new Date(2000, 0, 1),
    country: 'Perú',
  },
  {
    name: 'Jessica5',
    lastName: 'Chastain5',
    birthdate: new Date(2000, 0, 1),
    country: 'Perú',
  },
  {
    name: 'Jessica4',
    lastName: 'Chastain4',
    birthdate: new Date(2000, 0, 1),
    country: 'Perú',
  },
  {
    name: 'Jessica5',
    lastName: 'Chastain5',
    birthdate: new Date(2000, 0, 1),
    country: 'Perú',
  },
  {
    name: 'Jessica4',
    lastName: 'Chastain4',
    birthdate: new Date(2000, 0, 1),
    country: 'Perú',
  },
  {
    name: 'Jessica5',
    lastName: 'Chastain5',
    birthdate: new Date(2000, 0, 1),
    country: 'Perú',
  },
  {
    name: 'Jessica4',
    lastName: 'Chastain4',
    birthdate: new Date(2000, 0, 1),
    country: 'Perú',
  },
  {
    name: 'Jessica5',
    lastName: 'Chastain5',
    birthdate: new Date(2000, 0, 1),
    country: 'Perú',
  },
  {
    name: 'Jessica4',
    lastName: 'Chastain4',
    birthdate: new Date(2000, 0, 1),
    country: 'Perú',
  },
  {
    name: 'Jessica5',
    lastName: 'Chastain5',
    birthdate: new Date(2000, 0, 1),
    country: 'Perú',
  },
  {
    name: 'Jessica4',
    lastName: 'Chastain4',
    birthdate: new Date(2000, 0, 1),
    country: 'Perú',
  },
  {
    name: 'Jessica5',
    lastName: 'Chastain5',
    birthdate: new Date(2000, 0, 1),
    country: 'Perú',
  },
  {
    name: 'Jessica4',
    lastName: 'Chastain4',
    birthdate: new Date(2000, 0, 1),
    country: 'Perú',
  },
  {
    name: 'Jessica5',
    lastName: 'Chastain5',
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
  customersList: Array<any> = [];
  tableColumns: TableColumn[] = []
  tableConfig: TableConfig = {
    isSelectable: true,
    isPaginable: true,
    showActions: true
  }

  ngOnInit(): void {
    this.setTableColumns();

    setTimeout(() => {
      this.customersList = CUSTOMERS_DATA_MOCK;
    }, 1000);
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

  onTableAction(tableAction: TableAction) {
    switch (tableAction.action) {
      case TABLE_ACTION.EDIT:
        this.onEdit(tableAction.row);
        break;

      case TABLE_ACTION.DELETE:
        this.onDelete(tableAction.row);
        break;

      default:
        break;
    }
  }

  onEdit(customer: any) {
    console.log('Edit', customer);
  }
  onDelete(customer: any) {
    console.log('Delete', customer);
  }

}



import { Component, OnInit } from '@angular/core';
import { TableColumn } from '@shared/interfaces/table-column';
import { TableConfig } from '@shared/interfaces/table-config';
import { WarehouseGeneralEntry } from '../../interfaces/warehouse.interfaces';
import { TABLE_ACTION } from '@shared/enums/table-action.enum';

@Component({
  selector: 'app-warehouse-general-entry',
  templateUrl: './warehouse-general-entry.component.html',
  styleUrl: './warehouse-general-entry.component.scss'
})
export class WarehouseGeneralEntryComponent implements OnInit{
  
  warehouseEntriesList: WarehouseGeneralEntry[] = [];
  tableColumns: TableColumn[] = [];
  tableConfig: TableConfig = {
    isPaginable: true,
    showActions: true,    
    actions: [TABLE_ACTION.SHOW],
    showFilter: true,
    showExcelButton: true
  }

  ngOnInit(): void {
    this.setTableColumns();
    this.loadMockData(100);
  }
  
  setTableColumns() {
    this.tableColumns = [
      { label: 'Uid', def: 'uid', dataKey: 'uid' },
      { label: 'Folio', def: 'folio', dataKey: 'folio' },
      { label: 'Fecha', def: 'fecha', dataKey: 'fecha', dataType: 'date' },
      { label: 'Neodata Pedido', def: 'neodata', dataKey: 'neodata' },
      { label: 'Proveedor', def: 'proveedor', dataKey: 'proveedor' },
      { label: 'Personal que aprobó', def: 'personal', dataKey: 'personal' },
      { label: 'Nombre Proyecto', def: 'proyecto', dataKey: 'proyecto' },
      { label: 'Tipo Documento', def: 'documento', dataKey: 'documento' }
    ];
  }

  loadMockData(n: number) {
    // Array para almacenar los datos simulados
    const MOCK_DATA: WarehouseGeneralEntry[] = [];
  
    // Bucle para agregar n registros al mock
    for (let i = 0; i < n; i++) {
      MOCK_DATA.push({
        uid: `UID_${i + 1}`,
        folio: `FOL${i + 1}`,
        fecha: new Date(), // Puedes ajustar la fecha según sea necesario
        neodata: `ND00${i + 1}`,
        proveedor: `Proveedor ${String.fromCharCode(65 + (i % 26))}`, // A, B, C, ..., Z
        personal: `Personal ${i + 1}`,
        proyecto: `Proyecto ${i + 1}`,
        documento: `Documento ${i + 1}`
      });
    }
  
    // Asignamos los datos simulados a la lista
    this.warehouseEntriesList = MOCK_DATA;
  }

}

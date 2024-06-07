import { Component, OnInit } from '@angular/core';
import { TableColumn } from '@shared/interfaces/table-column';
import { TableConfig } from '@shared/interfaces/table-config';
import { WarehouseGeneralEntry } from '../../interfaces/warehouse.interfaces';
import { TABLE_ACTION } from '@shared/enums/table-action.enum';
import { WarehouseService } from '../../services/warehouse.service';

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

  constructor(
    private warehouseService: WarehouseService
  )
  {}

  ngOnInit(): void {
    this.setTableColumns();
    this.loadData();
  }
  
  setTableColumns() {
    this.tableColumns = [
      { label: 'Uid', def: 'uid', dataKey: 'uid' },
      { label: 'Folio', def: 'folio', dataKey: 'folio' },
      { label: 'Fecha', def: 'fecha', dataKey: 'fecha', dataType: 'date' },
      { label: 'Neodata Pedido', def: 'neodata_pedido', dataKey: 'neodata_pedido' },
      { label: 'Proveedor', def: 'proveedor', dataKey: 'proveedor' },
      { label: 'Personal que aprobó', def: 'personal', dataKey: 'personal' },
      { label: 'Nombre Proyecto', def: 'proyecto', dataKey: 'proyecto' },
      { label: 'Tipo Documento', def: 'documento', dataKey: 'documento' }
    ];
  }

  loadData(){
    this.warehouseService.getAllEntries('').subscribe(
      response => {
        this.warehouseEntriesList = response.list_of_items;
      },
      errorResponse => {
        console.log(errorResponse);
      }
    );
  }

}

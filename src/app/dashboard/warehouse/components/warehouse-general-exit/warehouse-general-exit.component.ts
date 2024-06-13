import { Component, OnInit } from '@angular/core';
import { TableColumn } from '@shared/interfaces/table-column';
import { TableConfig } from '@shared/interfaces/table-config';
import { WarehouseGeneralExit } from '../../interfaces/warehouse.interfaces';
import { TABLE_ACTION } from '@shared/enums/table-action.enum';
import { WarehouseService } from '../../services/warehouse.service';

@Component({
  selector: 'app-warehouse-general-exit',
  templateUrl: './warehouse-general-exit.component.html',
  styleUrl: './warehouse-general-exit.component.scss'
})
export class WarehouseGeneralExitComponent implements OnInit{

  warehouseExitsList: WarehouseGeneralExit[] = [];
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
      { label: 'Personal que entrega', def: 'nombre_entrega', dataKey: 'nombre_entrega' },
      { label: 'Personal que recibe', def: 'nombre_recibe', dataKey: 'nombre_recibe' },
      { label: 'Nombre Proyecto', def: 'nombre_proyecto', dataKey: 'nombre_proyecto' }
    ];
  }

  loadData(){
    this.warehouseService.getAllExits('').subscribe(
      response => {
        this.warehouseExitsList = response.list_of_items;
      },
      errorResponse => {
        console.log(errorResponse);
      }
    );
  }

}

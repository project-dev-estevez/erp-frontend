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
    //this.warehouseService.getAllExits('').subscribe(
      //response => {
        //this.warehouseExitsList = response.list_of_items;
        this.warehouseExitsList = [
          { fecha: new Date('01/07/2024'), folio: '2120', nombre_recibe: 'Diego', nombre_entrega: 'Javier', nombre_proyecto: 'Administración', uid: '122342341' },
          { fecha: new Date('02/07/2024'), folio: '2220', nombre_recibe: 'Ruth', nombre_entrega: 'Jessica', nombre_proyecto: 'Ventas', uid: '122342342' },
          { fecha: new Date('03/07/2024'), folio: '2320', nombre_recibe: 'Amaranta', nombre_entrega: 'David', nombre_proyecto: 'Sistemas', uid: '122342343' },
          { fecha: new Date('04/07/2024'), folio: '2420', nombre_recibe: 'Gerardo', nombre_entrega: 'Ricadrdo', nombre_proyecto: 'Rastreo', uid: '122342344' },
          { fecha: new Date('05/07/2024'), folio: '2520', nombre_recibe: 'Marlene', nombre_entrega: 'Juan', nombre_proyecto: 'Calibratto', uid: '122342345' },
          { fecha: new Date('06/07/2024'), folio: '2620', nombre_recibe: 'Allan', nombre_entrega: 'Hugo', nombre_proyecto: 'Talento', uid: '122342346' },
          { fecha: new Date('07/07/2024'), folio: '2720', nombre_recibe: 'Jose', nombre_entrega: 'Magali', nombre_proyecto: 'Ofertas', uid: '122342347' },
          { fecha: new Date('08/07/2024'), folio: '2820', nombre_recibe: 'Sonia', nombre_entrega: 'Laura', nombre_proyecto: 'Vehiculos', uid: '122342348' },
          { fecha: new Date('09/07/2024'), folio: '2920', nombre_recibe: 'Lorena', nombre_entrega: 'Alfonso', nombre_proyecto: 'Almacen', uid: '122342349' },
          { fecha: new Date('10/07/2024'), folio: '2020', nombre_recibe: 'Karina', nombre_entrega: 'Damian', nombre_proyecto: 'Empalmes', uid: '122342340' }
        ]
      //},
      //errorResponse => {
      //  console.log(errorResponse);
      //}
    //);
  }

}

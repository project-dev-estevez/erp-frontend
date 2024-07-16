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
      { label: 'Proveedor', def: 'nombre_fiscal', dataKey: 'nombre_fiscal' },
      { label: 'Personal que aprobó', def: 'nombre', dataKey: 'nombre' },
      { label: 'Nombre Proyecto', def: 'nombre_proyecto', dataKey: 'nombre_proyecto' },
      { label: 'Tipo Documento', def: 'tipo_documento', dataKey: 'tipo_documento' }
    ];
  }

  loadData(){
    //this.warehouseService.getAllEntries('').subscribe(
      //response => {
        //this.warehouseEntriesList = response.list_of_items;
        this.warehouseEntriesList = [
          { fecha: new Date('01/07/2024'), folio: '2120', neodata_pedido: '2020', nombre: 'Diego', nombre_fiscal: 'Tamex', nombre_proyecto: 'Administración', numero_proyecto: '1.01', tipo_documento: 'Factura', uid: '122342341' },
          { fecha: new Date('02/07/2024'), folio: '2220', neodata_pedido: '2021', nombre: 'Ruth', nombre_fiscal: 'Comex', nombre_proyecto: 'Ventas', numero_proyecto: '1.02', tipo_documento: 'Factura', uid: '122342342' },
          { fecha: new Date('03/07/2024'), folio: '2320', neodata_pedido: '2022', nombre: 'Amaranta', nombre_fiscal: 'Telmex', nombre_proyecto: 'Sistemas', numero_proyecto: '1.03', tipo_documento: 'Otro', uid: '122342343' },
          { fecha: new Date('04/07/2024'), folio: '2420', neodata_pedido: '2023', nombre: 'Gerardo', nombre_fiscal: 'Telcel', nombre_proyecto: 'Rastreo', numero_proyecto: '111.02', tipo_documento: 'Acuse', uid: '122342344' },
          { fecha: new Date('05/07/2024'), folio: '2520', neodata_pedido: '2024', nombre: 'Marlene', nombre_fiscal: 'Estevez', nombre_proyecto: 'Calibratto', numero_proyecto: '111.01', tipo_documento: 'Otro', uid: '122342345' },
          { fecha: new Date('06/07/2024'), folio: '2620', neodata_pedido: '2025', nombre: 'Allan', nombre_fiscal: 'HSBC', nombre_proyecto: 'Talento', numero_proyecto: '112.04', tipo_documento: 'Acuse', uid: '122342346' },
          { fecha: new Date('07/07/2024'), folio: '2720', neodata_pedido: '2026', nombre: 'Jose', nombre_fiscal: 'Oxxo', nombre_proyecto: 'Ofertas', numero_proyecto: '112.01', tipo_documento: 'Otro', uid: '122342347' },
          { fecha: new Date('08/07/2024'), folio: '2820', neodata_pedido: '2027', nombre: 'Sonia', nombre_fiscal: 'Xbox', nombre_proyecto: 'Vehiculos', numero_proyecto: '109', tipo_documento: 'Acuse', uid: '122342348' },
          { fecha: new Date('09/07/2024'), folio: '2920', neodata_pedido: '2028', nombre: 'Lorena', nombre_fiscal: 'HP', nombre_proyecto: 'Almacen', numero_proyecto: '112', tipo_documento: 'Otro', uid: '122342349' },
          { fecha: new Date('10/07/2024'), folio: '2020', neodata_pedido: '2029', nombre: 'Karina', nombre_fiscal: 'Dell', nombre_proyecto: 'Empalmes', numero_proyecto: '112', tipo_documento: 'Responsiva', uid: '122342340' }
          // Puedes agregar más elementos según tus necesidades
        ]; 
      //},
      //errorResponse => {
      //  console.log(errorResponse);
      //}
    //);
  }

}

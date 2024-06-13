export interface WarehouseGeneralEntry {
  cantidad: number | null;
  descripcion: string | null;
  fecha: string;
  folio: string;
  idtbl_almacen_movimientos: string;
  neodata_pedido: string;
  nombre: string;
  nombre_fiscal: string | null;
  nombre_proyecto: string;
  numero_documento: string;
  numero_proyecto: string;
  precio: number | null;
  tbl_proveedores_idtbl_proveedores: string;
  tipo_documento: string;
  uid: string;
};

export interface ResponseGetAllEntries{
  list_of_items: WarehouseGeneralEntry[];
  total: number;
}

export interface WarehouseGeneralExit {
  fecha: string;
  folio: string;
  idtbl_almacen_movimientos: string;
  nombre_recibe: string;
  nombre_entrega: string;
  nombre_proyecto: string;
  numero_proyecto: string;
  uid: string;
};

export interface ResponseGetAllExits{
  list_of_items: WarehouseGeneralExit[];
  total: number;
}

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
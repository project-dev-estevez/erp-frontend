import { AfterViewInit, Component, EventEmitter, Input, output, Output, ViewChild } from '@angular/core';
import { TableColumn } from '../../interfaces/table-column';
import { SelectionModel } from '@angular/cdk/collections';
import { TableConfig } from '../../interfaces/table-config';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { TableAction } from '../../interfaces/table-action';
import { TABLE_ACTION } from '../../enums/table-action.enum';
import { MatSort } from '@angular/material/sort';
import { PaginationDto } from '@shared/interfaces/pagination.dto';

@Component({
  selector: 'app-reusable-table',
  templateUrl: './reusable-table.component.html',
  styleUrl: './reusable-table.component.scss'
})
export class ReusableTableComponent implements AfterViewInit {

  TABLE_ACTION = TABLE_ACTION;

  dataSource: MatTableDataSource<Array<any>> = new MatTableDataSource();
  displayedColumns: string[] = [];
  tableColumns: TableColumn[] = [];
  selection = new SelectionModel<any>(true, []);
  tableConfig: TableConfig | undefined;
  currentFilterValue: string = '';

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  public totalItems: number = 0;

  @ViewChild(MatSort) sort!: MatSort;

  @Input() set data(data: Array<any>) {
    this.dataSource = new MatTableDataSource(data);
    this.dataSource.paginator = this.paginator;
  }

  @Input() set columns( columns: TableColumn[] ) {
    this.tableColumns = columns;
    this.displayedColumns = this.tableColumns.map(col => col.def);
  }

  @Input() set config(config: TableConfig) {
    this.setConfig(config)
  }

  public onSelectRow = output<any>();
  public onClickAction = output<TableAction>();
  public onPaginationChange = output<PaginationDto>();

  constructor() {}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  onSelect() {
    this.onSelectRow.emit(this.selection.selected);
  }

  setConfig(config: TableConfig) {
    this.tableConfig = config

    if(this.tableConfig.isSelectable) {
      this.displayedColumns.unshift('select');
    }

    if(this.tableConfig.showActions){
      if( !this.displayedColumns.includes('actions') )
      {
        this.displayedColumns.push('actions');
      } 
    }

    if( this.tableConfig.totalItemsPagination )
    {
      this.totalItems = this.tableConfig.totalItemsPagination;
    }
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      this.onSelect();
      return;
    }

    this.selection.select(...this.dataSource.data);
    this.onSelect();
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: any): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${
      row.position + 1
    }`;
  }

  isActionAllowed(action: TABLE_ACTION): boolean {

    if(
      this.tableConfig && 
      this.tableConfig.actions && 
      this.tableConfig.actions.includes(action)
    ){
      return true;
    }

    return false;
  }

  onShow(row: any) {
    this.onClickAction.emit({ action: TABLE_ACTION.SHOW, row });
  }

  onEdit(row: any) {
    this.onClickAction.emit({ action: TABLE_ACTION.EDIT, row });
  }

  onDelete(row: any) {
    this.onClickAction.emit({ action: TABLE_ACTION.DELETE, row });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    this.currentFilterValue = filterValue;
  }

  // Pagination
  onPaginateChange( event: PageEvent )
  {
    const {
      pageIndex,
      pageSize, 
      // length
    } = event;

    const takeFrom = pageIndex * pageSize;
    const itemsPerPage = pageSize;
    const paginationData: PaginationDto = { limit: itemsPerPage, offset: takeFrom };

    this.onPaginationChange.emit( paginationData );
  }

}

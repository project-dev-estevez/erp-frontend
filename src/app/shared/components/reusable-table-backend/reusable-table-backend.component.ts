import { Component, Input, output, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { TABLE_ACTION } from '@shared/enums/table-action.enum';
import { PaginationData } from '@shared/interfaces/pagination-data';
import { TableAction } from '@shared/interfaces/table-action';
import { TableColumn } from '@shared/interfaces/table-column';
import { TableConfig } from '@shared/interfaces/table-config';

@Component({
  selector: 'app-reusable-table-backend',
  templateUrl: './reusable-table-backend.component.html',
  styleUrl: './reusable-table-backend.component.scss'
})
export class ReusableTableBackendComponent {

  @Input() showSearchWithCreate: boolean = false;
  @Input() buttonText: string = 'Crear';
  @Input() searchPlaceholderText: string = 'Buscar...';

  public onClickInCreate = output<void>();
  public onSearchFilter = output<string>();
  public onTableAction = output<TableAction>();
  public onPaginationChange = output<PaginationData>();

  public dataSource: any = new MatTableDataSource<any>();
  public displayedColumns: string[] = [];
  public tableColumns: TableColumn[] = [];
  public tableConfig: TableConfig | undefined;

  // Pagination
  public totalItems: number = 0;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  @Input() set data(data: any)
  {
    this.dataSource.data = data;
  }

  @Input() set columns(columns: TableColumn[])
  {
    this.tableColumns = columns;
    this.displayedColumns = columns.map(col => col.def);    
  }

  @Input() set config(config: TableConfig)
  {
    this.tableConfig = config;
    if( this.tableConfig.showActions )
    {
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

  onShow( row: any )
  {
    this.onTableAction.emit({ action: TABLE_ACTION.SHOW, row });
  }

  onEdit( row: any )
  {
    this.onTableAction.emit({ action: TABLE_ACTION.EDIT, row });
  }

  onDelete( row: any )
  {
    this.onTableAction.emit({ action: TABLE_ACTION.DELETE, row });    
  }

  onClickInCreateButton()
  {
    this.onClickInCreate.emit();
  }

  onSearchTerm( term: string )
  {
    this.paginator.firstPage();
    this.onSearchFilter.emit( term );
  }

  onPaginateChange( event: PageEvent )
  {
    const {
      pageIndex,
      pageSize, 
      // length
    } = event;

    const takeFrom = pageIndex * pageSize;
    const itemsPerPage = pageSize;
    const paginationData: PaginationData = { limit: itemsPerPage, from: takeFrom };

    this.onPaginationChange.emit( paginationData );
  }

}

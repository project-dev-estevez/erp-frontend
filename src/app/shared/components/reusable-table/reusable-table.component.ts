import { Component, Input } from '@angular/core';
import { TableColumn } from '../../interfaces/table-column';

@Component({
  selector: 'app-reusable-table',
  templateUrl: './reusable-table.component.html',
  styleUrl: './reusable-table.component.scss'
})
export class ReusableTableComponent {

  dataSource = [];
  displayedColumns: string[] = [];
  tableColumns: TableColumn[] = []

  @Input() set data(data: any) {
    this.dataSource = data;
  }

  @Input() set columns( columns: TableColumn[] ) {
    this.tableColumns = columns;
    this.displayedColumns = this.tableColumns.map(col => col.def)
  }

}

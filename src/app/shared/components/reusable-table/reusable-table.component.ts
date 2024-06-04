import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TableColumn } from '../../interfaces/table-column';
import { SelectionModel } from '@angular/cdk/collections';
import { TableConfig } from '../../interfaces/table-config';

@Component({
  selector: 'app-reusable-table',
  templateUrl: './reusable-table.component.html',
  styleUrl: './reusable-table.component.scss'
})
export class ReusableTableComponent {

  dataSource = [];
  displayedColumns: string[] = [];
  tableColumns: TableColumn[] = []
  selection = new SelectionModel<any>(true, []);
  tableConfig: TableConfig | undefined

  @Input() set data(data: any) {
    this.dataSource = data;
  }

  @Input() set columns( columns: TableColumn[] ) {
    this.tableColumns = columns;
    this.displayedColumns = this.tableColumns.map(col => col.def);
  }

  @Input() set config(config: TableConfig) {
    this.setConfig(config)
  }

  @Output() select: EventEmitter<any> = new EventEmitter();

  onSelect() {
    this.select.emit(this.selection.selected);
  }

  setConfig(config: TableConfig) {
    this.tableConfig = config

    if(this.tableConfig.isSelectable) {
      this.displayedColumns.unshift('select');
    }
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      this.onSelect();
      return;
    }

    this.selection.select(...this.dataSource);
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

}

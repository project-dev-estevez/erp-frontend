import { Component, OnInit } from '@angular/core';
import { Department } from '../../interfaces';
import { TableColumn } from '@shared/interfaces/table-column';
import { TableConfig } from '@shared/interfaces/table-config';
import { Router } from '@angular/router';
import { DepartmentsService } from '../../services/departments.service';
import { TableAction } from '@shared/interfaces/table-action';
import { TABLE_ACTION } from '@shared/enums/table-action.enum';

@Component({
  selector: 'app-list-departments-page',
  templateUrl: './list-departments-page.component.html',
  styleUrl: './list-departments-page.component.scss'
})
export class ListDepartmentsPageComponent implements OnInit {

  public dataList: Department[] = [];

  public tableColumns: TableColumn[] = [
    { label: 'Nombre', def: 'name', dataKey: 'name' },
  ];

  public tableConfig: TableConfig = {
    showActions: true,
    totalItemsPagination: 0
  };

  constructor(
    private departmentsService: DepartmentsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadDataList();
  }

  private loadDataList() {
    this.departmentsService.getAllDepartments().subscribe(
      response => {
        this.dataList = response.results;
        this.tableConfig.totalItemsPagination = response.total;
      },
      errorResponse => {
        console.log(errorResponse);
      }
    );
  }

  onClickInCreate() {
    this.router.navigate(['/super-dashboard/departments/new-department']);
  }

  onTableAction( tableAction: TableAction ) {

    const id = tableAction.row.id;

    switch ( tableAction.action ) {
      case TABLE_ACTION.EDIT:
        this.router.navigate([`/super-dashboard/departments/edit/${id}`]);
      break;

      default:
      break;
    }

  }

}

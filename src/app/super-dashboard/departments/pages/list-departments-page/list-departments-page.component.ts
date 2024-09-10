import { Component, OnInit } from '@angular/core';
import { Department } from '../../interfaces';
import { TableColumn } from '@shared/interfaces/table-column';
import { TableConfig } from '@shared/interfaces/table-config';
import { Router } from '@angular/router';
import { DepartmentsService } from '../../services/departments.service';
import { TableAction } from '@shared/interfaces/table-action';
import { TABLE_ACTION } from '@shared/enums/table-action.enum';
import { SweetAlertService } from '@shared/services/sweet-alert.service';
import { PaginationDto } from '@shared/interfaces/pagination.dto';

@Component({
  selector: 'app-list-departments-page',
  templateUrl: './list-departments-page.component.html',
  styleUrl: './list-departments-page.component.scss'
})
export class ListDepartmentsPageComponent implements OnInit {

  private query: PaginationDto = { limit: 8, offset: 0 };
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
    private sweetAlert: SweetAlertService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadDataList();
  }

  private loadDataList() {
    this.departmentsService.getAllDepartments( this.query ).subscribe(
      response => {
        this.dataList = response.results;
        this.tableConfig = {
          ...this.tableConfig, 
          totalItemsPagination: response.total
        };
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

      case TABLE_ACTION.SHOW:
        this.router.navigate([`/super-dashboard/departments/show/${id}`]);
      break;

      case TABLE_ACTION.DELETE:
        this.deleteDepartment( id );
      break;

      default:
      break;
    }
  }

  onPaginationChange( paginationData: PaginationDto )
  {
    this.query.limit = paginationData.limit;
    this.query.offset = paginationData.offset;

    this.loadDataList();
  }

  async deleteDepartment( id: string ) {

    const { isConfirmed } = await this.sweetAlert.presentDelete('El Departamento');
    if( !isConfirmed ) return;

    this.departmentsService.deleteDepartmentById( id ).subscribe(
      response => {
        this.sweetAlert.presentSuccess('Departamento eliminado!');
        this.loadDataList();
      },
      errorResponse => {
        console.log(errorResponse);
      }
    );
  }

}

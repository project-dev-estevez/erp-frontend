import { Component, OnInit } from '@angular/core';
import { Project } from '../../interfaces/project-entity';
import { TableColumn } from '@shared/interfaces/table-column';
import { TableConfig } from '@shared/interfaces/table-config';
import { ProjectsService } from '../../services/projects.service';
import { SweetAlertService } from '@shared/services/sweet-alert.service';
import { Router } from '@angular/router';
import { TableAction } from '@shared/interfaces/table-action';
import { TABLE_ACTION } from '@shared/enums/table-action.enum';
import { PaginationDto } from '@shared/interfaces/pagination.dto';

@Component({
  selector: 'app-list-projects-page',
  templateUrl: './list-projects-page.component.html',
  styleUrl: './list-projects-page.component.scss'
})
export class ListProjectsPageComponent implements OnInit {
  
  private query: PaginationDto = { limit: 8, offset: 0 };
  public dataList: Project[] = [];
  
  public tableColumns: TableColumn[] = [
    { label: 'Proyecto', def: 'name', dataKey: 'name' },
  ];

  public tableConfig: TableConfig = {
    showActions: true,
    totalItemsPagination: 0
  };

  constructor(
    private projectsService: ProjectsService,
    private sweetAlert: SweetAlertService,
    private router: Router
  ){}
  
  ngOnInit(): void {
    this.loadDataList();
  }

  private loadDataList() {
    this.projectsService.getAllProjects( this.query ).subscribe(
      response => {
        this.dataList = response.results;
        this.tableConfig = {
          ...this.tableConfig,
          totalItemsPagination: response.total
        }
      },
      errorResponse => {
        console.log(errorResponse);
      }
    );
  }

  onClickInCreate() {
    this.router.navigate(['/super-dashboard/projects/new-project']);
  }

  onTableAction( tableAction: TableAction ) {

    const id = tableAction.row.id;

    switch ( tableAction.action ) {
      case TABLE_ACTION.EDIT:
        this.router.navigate([`/super-dashboard/projects/edit/${id}`]);
      break;

      case TABLE_ACTION.SHOW:
        this.router.navigate([`/super-dashboard/projects/show/${id}`]);
      break;

      case TABLE_ACTION.DELETE:
        this.deleteProject( id );
      break;

      default:
      break;
    }
  }

  onPaginationChange( paginationData: PaginationDto ){
    this.query.limit = paginationData.limit;
    this.query.offset = paginationData.offset;

    this.loadDataList();
  }

  async deleteProject( id: string ) {

    const { isConfirmed } = await this.sweetAlert.presentDelete('El Proyecto');
    if( !isConfirmed ) return;

    this.projectsService.deleteProjectById( id ).subscribe(
      response => {
        this.sweetAlert.presentSuccess('¡Proyecto eliminado correctamente!');
        this.loadDataList();
      },
      errorResponse => {
        console.log(errorResponse);
      }
    );
  }

}

import { Component, OnInit } from '@angular/core';
import { Area } from '../../interfaces/area-entity';
import { TableColumn } from '@shared/interfaces/table-column';
import { TableConfig } from '@shared/interfaces/table-config';
import { AreasService } from '../../services/areas.service';
import { Router } from '@angular/router';
import { SweetAlertService } from '@shared/services/sweet-alert.service';
import { TableAction } from '@shared/interfaces/table-action';
import { TABLE_ACTION } from '@shared/enums/table-action.enum';
import { PaginationDto } from '@shared/interfaces/pagination.dto';

@Component({
  selector: 'app-list-areas-page',
  templateUrl: './list-areas-page.component.html',
  styleUrl: './list-areas-page.component.scss'
})
export class ListAreasPageComponent implements OnInit {

  private query: PaginationDto = { limit: 8, offset: 0 }

  public dataList: Area[] = [];

  public tableColumns: TableColumn[] = [
    { label: 'Area', def: 'name', dataKey: 'name' },
  ];

  public tableConfig: TableConfig = {
    showActions: true,
    totalItemsPagination: 0
  };

  constructor(
    private areasService: AreasService,
    private sweetAlert: SweetAlertService,
    private router: Router
  ){}
  
  ngOnInit(): void {
    this.loadDataList();
  }

  private loadDataList() {
    this.areasService.getAllAreas( this. query ).subscribe(
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
    this.router.navigate(['/super-dashboard/areas/new-area']);
  }

  onTableAction( tableAction: TableAction ) {

    const id = tableAction.row.id;

    switch ( tableAction.action ) {
      case TABLE_ACTION.EDIT:
        this.router.navigate([`/super-dashboard/areas/edit/${id}`]);
      break;

      case TABLE_ACTION.SHOW:
        this.router.navigate([`/super-dashboard/areas/show/${id}`]);
      break;

      case TABLE_ACTION.DELETE:
        this.deleteArea( id );
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

  async deleteArea( id: string ) {

    const { isConfirmed } = await this.sweetAlert.presentDelete('El Área');
    if( !isConfirmed ) return;

    this.areasService.deleteAreaById( id ).subscribe(
      response => {
        this.sweetAlert.presentSuccess('¡Área eliminada correctamente!');
        this.loadDataList();
      },
      errorResponse => {
        console.log(errorResponse);
      }
    );
  }

}

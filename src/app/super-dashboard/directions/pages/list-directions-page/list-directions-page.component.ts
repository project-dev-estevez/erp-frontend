import { Component, OnInit } from '@angular/core';
import { Direction } from '../../interfaces';
import { TableColumn } from '@shared/interfaces/table-column';
import { TableConfig } from '@shared/interfaces/table-config';
import { DirectionsService } from '../../services/directions.service';
import { SweetAlertService } from '@shared/services/sweet-alert.service';
import { Router } from '@angular/router';
import { TableAction } from '@shared/interfaces/table-action';
import { TABLE_ACTION } from '@shared/enums/table-action.enum';
import { PaginationDto } from '@shared/interfaces/pagination.dto';

@Component({
  selector: 'app-list-directions-page',
  templateUrl: './list-directions-page.component.html',
  styleUrl: './list-directions-page.component.scss'
})
export class ListDirectionsPageComponent implements OnInit {

  private query: PaginationDto = { limit: 8, offset: 0 };
  public dataList: Direction[] = [];

  public tableColumns: TableColumn[] = [
    { label: 'Nombre', def: 'name', dataKey: 'name' },
  ];

  public tableConfig: TableConfig = {
    showActions: true,
    totalItemsPagination: 0
  };

  constructor(
    private directionsService: DirectionsService,
    private sweetAlert: SweetAlertService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadDataList();
  }

  loadDataList() {
    this.directionsService.getAllDirections( this.query ).subscribe(
      response => {        
        this.dataList = response.results;
        this.tableConfig = { ...this.tableConfig, totalItemsPagination: response.total };
      },
      errorResponse => {
        console.error(errorResponse);
      }
    );
  }

  onClickInCreate() {
    this.router.navigate(['/super-dashboard/directions/new-direction']);
  }

  onTableAction( tableAction: TableAction ) {

    const id = tableAction.row.id;

    switch ( tableAction.action ) {
      case TABLE_ACTION.EDIT:
        this.router.navigate([`/super-dashboard/directions/edit/${id}`]);
      break;

      case TABLE_ACTION.SHOW:
        this.router.navigate([`/super-dashboard/directions/show/${id}`]);
      break;

      case TABLE_ACTION.DELETE:
        this.deleteDirection( id );
      break;

      default:
      break;
    }
  }

  onPaginationChange( paginationDto: PaginationDto ) {
    this.query.limit = paginationDto.limit;
    this.query.offset = paginationDto.offset;

    this.loadDataList();
  }

  async deleteDirection( id: string ) {

    const { isConfirmed } = await this.sweetAlert.presentDelete('El CEO');
    if( !isConfirmed ) return;

    this.directionsService.deleteDirectionById( id ).subscribe(
      response => {
        this.sweetAlert.presentSuccess('¡Dirección eliminada correctamente!');
        this.loadDataList();
      },
      errorResponse => {
        console.log(errorResponse);
      }
    );
  }

}

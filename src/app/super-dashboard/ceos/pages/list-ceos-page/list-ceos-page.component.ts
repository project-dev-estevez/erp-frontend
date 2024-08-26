import { Component, OnInit } from '@angular/core';
import { Ceo } from '../../interfaces/ceo-entity';
import { TableColumn } from '@shared/interfaces/table-column';
import { TableConfig } from '@shared/interfaces/table-config';
import { CeosService } from '../../services/ceos.service';
import { SweetAlertService } from '@shared/services/sweet-alert.service';
import { Router } from '@angular/router';
import { TableAction } from '@shared/interfaces/table-action';
import { TABLE_ACTION } from '@shared/enums/table-action.enum';

@Component({
  selector: 'app-list-ceos-page',
  templateUrl: './list-ceos-page.component.html',
  styleUrl: './list-ceos-page.component.scss'
})
export class ListCeosPageComponent implements OnInit {

  public dataList: Ceo[] = [];

  public tableColumns: TableColumn[] = [
    { label: 'Nombre', def: 'fullName', dataKey: 'fullName' },
  ];

  public tableConfig: TableConfig = {
    showActions: true,
    totalItemsPagination: 0
  };

  constructor(
    private ceosService: CeosService,
    private sweetAlert: SweetAlertService,
    private router: Router
  ){}

  ngOnInit(): void {
    this.loadDataList();
  }

  private loadDataList() {
    this.ceosService.getAllCeos().subscribe(
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
    this.router.navigate(['/super-dashboard/ceos/new-ceo']);
  }

  onTableAction( tableAction: TableAction ) {

    const id = tableAction.row.id;

    switch ( tableAction.action ) {
      case TABLE_ACTION.EDIT:
        this.router.navigate([`/super-dashboard/ceos/edit/${id}`]);
      break;

      case TABLE_ACTION.SHOW:
        this.router.navigate([`/super-dashboard/ceos/show/${id}`]);
      break;

      case TABLE_ACTION.DELETE:
        this.deleteCeo( id );
      break;

      default:
      break;
    }
  }

  async deleteCeo( id: string ) {

    const { isConfirmed } = await this.sweetAlert.presentDelete('El CEO');
    if( !isConfirmed ) return;

    this.ceosService.deleteCeoById( id ).subscribe(
      response => {
        this.sweetAlert.presentSuccess('¡CEO eliminado correctamente!');
        this.loadDataList();
      },
      errorResponse => {
        console.log(errorResponse);
      }
    );
  }

}

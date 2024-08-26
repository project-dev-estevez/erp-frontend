import { Component, OnInit } from '@angular/core';
import { Enterprise } from '../../interfaces';
import { TableColumn } from '@shared/interfaces/table-column';
import { TableConfig } from '@shared/interfaces/table-config';
import { Router } from '@angular/router';
import { EnterprisesService } from '../../services/enterprises.service';
import { TableAction } from '@shared/interfaces/table-action';
import { TABLE_ACTION } from '@shared/enums/table-action.enum';
import { SweetAlertService } from '@shared/services/sweet-alert.service';

@Component({
  selector: 'app-list-enterprises-page',
  templateUrl: './list-enterprises-page.component.html',
  styleUrl: './list-enterprises-page.component.scss'
})
export class ListEnterprisesPageComponent implements OnInit {

  public dataList: Enterprise[] = [];

  public tableColumns: TableColumn[] = [
    { label: 'Nombre', def:'name', dataKey:'name'},
  ];

  public tableConfig: TableConfig = {
    showActions: true,
    totalItemsPagination: 0
  };

  constructor(
    private enterprisesService: EnterprisesService,
    private sweetAlert: SweetAlertService,
    private router: Router
  ){ }

  ngOnInit(): void {
    this.loadDataList();
  }

  private loadDataList(){
    this.enterprisesService.getAllEnterprises().subscribe(
      response => {
        this.dataList = response.results;
        this.tableConfig.totalItemsPagination = response.total;
      },
      errorResponse => {
        console.log(errorResponse);
      }
    );
  }

  onClickInCreate(){
    this.router.navigate(['/super-dashboard/enterprises/new-enterprise']);
  }

  onTableAction( tableAction: TableAction ){
    const id = tableAction.row.id;

    switch ( tableAction.action ) {
      case TABLE_ACTION.EDIT:
        this.router.navigate([`/super-dashboard/enterprises/edit/${id}`]);
        break;

        case TABLE_ACTION.SHOW:
          this.router.navigate([`/super-dashboard/enterprises/show/${id}`]);
          break;

          case TABLE_ACTION.DELETE:
            this.deleteEnterprise( id );
            break;

            default:
            break;
    }
  }

  async deleteEnterprise( id: string ){

    const { isConfirmed } = await this.sweetAlert.presentDelete(`${id}`);
    if( !isConfirmed ) return;

    this.enterprisesService.deleteEnterpriseById( id ).subscribe(
      response => {
        this.sweetAlert.presentSuccess( 'Empresa elimidada' );
        this.loadDataList();
      },
      errorResponse => {
        console.log(errorResponse);
      }
    )

}
}

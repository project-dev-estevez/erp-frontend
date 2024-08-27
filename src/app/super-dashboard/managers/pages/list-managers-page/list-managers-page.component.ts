import { Component, OnInit } from '@angular/core';
import { Manager } from '../../interfaces';
import { TableColumn } from '../../../../shared/interfaces/table-column';
import { TableConfig } from '@shared/interfaces/table-config';
import { SweetAlertService } from '@shared/services/sweet-alert.service';
import { Router } from '@angular/router';
import { TableAction } from '@shared/interfaces/table-action';
import { TABLE_ACTION } from '@shared/enums/table-action.enum';
import { ManagersService } from '../../services/managers.service';

@Component({
  selector: 'app-list-managers-page',
  templateUrl: './list-managers-page.component.html',
  styleUrl: './list-managers-page.component.scss'
})
export class ListManagersPageComponent implements OnInit {

  public dataList: Manager[] = [];

  public tableColumns: TableColumn[] = [
    { label: 'Nombre', def:'name', dataKey:'name' },
  ];

  public tableConfig: TableConfig = {
    showActions: true,
    totalItemsPagination: 0
  };

  constructor(
    private managersService: ManagersService,
    private sweetAlert: SweetAlertService,
    private router: Router
  ){}

  ngOnInit(): void {
    this.loadDataList();
  }

  private loadDataList(){
    this.managersService.getAllManagers().subscribe(
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
    this.router.navigate(['/super-dashboard/managers/new-manager']);
  }

  onTableAction( tableAction: TableAction){
    const id = tableAction.row.id;

    switch ( tableAction.action ){
      case TABLE_ACTION.EDIT:
        this.router.navigate([`/super-dashboard/managers/edit/${id}`]);
        break;

        case TABLE_ACTION.SHOW:
          this.router.navigate([`/super-dashboard/managers/show/${id}`]);
          break;

          case TABLE_ACTION.DELETE:
            this.deleteManager( id );
            break;

            default:
              break;
    }
  }

  async deleteManager( id: string ){

    const { isConfirmed } = await this.sweetAlert.presentDelete(`${id}`);
    if( !isConfirmed ) return;

     this.managersService.deleteManagerById( id ).subscribe(
      response => {
        this.sweetAlert.presentSuccess( 'Gerente elimidado' );
        this.loadDataList();
      },
      errorResponse => {
        console.log(errorResponse);
      }
    )

}
}

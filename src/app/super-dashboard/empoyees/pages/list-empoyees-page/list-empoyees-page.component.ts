import { Component, OnInit } from '@angular/core';
import { Empoyees } from '../../interfaces/empoyees-entity';
import { TableColumn } from '@shared/interfaces/table-column';
import { TableConfig } from '@shared/interfaces/table-config';
import { SweetAlertService } from '@shared/services/sweet-alert.service';
import { Router } from '@angular/router';
import { TableAction } from '@shared/interfaces/table-action';
import { TABLE_ACTION } from '@shared/enums/table-action.enum';
import { EmpoyeesService } from '../../services/empoyees.service';

@Component({
  selector: 'app-list-empoyees-page',
  templateUrl: './list-empoyees-page.component.html',
  styleUrl: './list-empoyees-page.component.scss'
})
export class ListEmpoyeesPageComponent implements OnInit {

  public dataList: Empoyees[] = [];

  public tableColumns: TableColumn[] = [
    { label: 'Nombre', def:'name', dataKey:'name' },
  ];

  public tableConfig: TableConfig = {
    showActions: true,
    totalItemsPagination: 0
  };

  constructor(
    private empoyeesService: EmpoyeesService,
    private sweetAlert: SweetAlertService,
    private router: Router
  ){}

  ngOnInit(): void {
    this.loadDataList();
  }

  private loadDataList(){
    this.empoyeesService.getAllEmpoyees().subscribe(
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
    this.router.navigate(['/super-dashboard/empoyees/new-empoyees']);
  }

  onTableAction( tableAction: TableAction){
    const id = tableAction.row.id;

    switch ( tableAction.action ){
      case TABLE_ACTION.EDIT:
        this.router.navigate([`/super-dashboard/empoyees/edit/${id}`]);
        break;

        case TABLE_ACTION.SHOW:
          this.router.navigate([`/super-dashboard/empoyees/show/${id}`]);
          break;

          case TABLE_ACTION.DELETE:
            this.deleteEmpoyees( id );
            break;

            default:
              break;
    }
  }

  async deleteEmpoyees( id: string ){

    const { isConfirmed } = await this.sweetAlert.presentDelete(`${id}`);
    if( !isConfirmed ) return;

     this.empoyeesService.deleteEmpoyeesById( id ).subscribe(
      response => {
        this.sweetAlert.presentSuccess( 'Puesto elimidado' );
        this.loadDataList();
      },
      errorResponse => {
        console.log(errorResponse);
      }
    )

}
}

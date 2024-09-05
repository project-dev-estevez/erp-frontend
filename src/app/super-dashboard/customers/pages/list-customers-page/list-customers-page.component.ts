import { Component, OnInit } from '@angular/core';
import { Customer } from '../../interfaces/customer-entity';
import { TableColumn } from '@shared/interfaces/table-column';
import { TableConfig } from '@shared/interfaces/table-config';
import { CustomersService } from '../../services/customers.service';
import { SweetAlertService } from '@shared/services/sweet-alert.service';
import { Router } from '@angular/router';
import { TableAction } from '@shared/interfaces/table-action';
import { TABLE_ACTION } from '@shared/enums/table-action.enum';

@Component({
  selector: 'app-list-customers-page',
  templateUrl: './list-customers-page.component.html',
  styleUrl: './list-customers-page.component.scss'
})
export class ListCustomersPageComponent implements OnInit {
  
  public dataList: Customer[] = [];

  public tableColumns: TableColumn[] = [
    { label: 'Cliente', def: 'name', dataKey: 'name' },
  ];

  public tableConfig: TableConfig = {
    showActions: true,
    totalItemsPagination: 0
  };

  constructor(
    private customersService: CustomersService,
    private sweetAlert: SweetAlertService,
    private router: Router
  ){}
  
  ngOnInit(): void {
    this.loadDataList();
  }

  private loadDataList() {
    this.customersService.getAllCustomers().subscribe(
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
    this.router.navigate(['/super-dashboard/customers/new-customer']);
  }

  onTableAction( tableAction: TableAction ) {

    const id = tableAction.row.id;

    switch ( tableAction.action ) {
      case TABLE_ACTION.EDIT:
        this.router.navigate([`/super-dashboard/customers/edit/${id}`]);
      break;

      case TABLE_ACTION.SHOW:
        this.router.navigate([`/super-dashboard/customers/show/${id}`]);
      break;

      case TABLE_ACTION.DELETE:
        this.deleteCustomer( id );
      break;

      default:
      break;
    }
  }

  async deleteCustomer( id: string ) {

    const { isConfirmed } = await this.sweetAlert.presentDelete('El Cliente');
    if( !isConfirmed ) return;

    this.customersService.deleteCustomerById( id ).subscribe(
      response => {
        this.sweetAlert.presentSuccess('¡Cliente eliminado correctamente!');
        this.loadDataList();
      },
      errorResponse => {
        console.log(errorResponse);
      }
    );
  }

}

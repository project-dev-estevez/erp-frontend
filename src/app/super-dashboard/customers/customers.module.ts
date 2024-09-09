import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CreateOrEditCustomerPageComponent } from './pages/create-or-edit-customer-page/create-or-edit-customer-page.component';
import { ShowCustomerPageComponent } from './pages/show-customer-page/show-customer-page.component';
import { ListCustomersPageComponent } from './pages/list-customers-page/list-customers-page.component';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [
    CreateOrEditCustomerPageComponent,
    ShowCustomerPageComponent,
    ListCustomersPageComponent
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    SharedModule
  ]
})
export class CustomersModule { }

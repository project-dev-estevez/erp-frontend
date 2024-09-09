import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCustomersPageComponent } from './pages/list-customers-page/list-customers-page.component';
import { CreateOrEditCustomerPageComponent } from './pages/create-or-edit-customer-page/create-or-edit-customer-page.component';
import { ShowCustomerPageComponent } from './pages/show-customer-page/show-customer-page.component';

const routes: Routes = [
  { path: '', component: ListCustomersPageComponent },
  { path: 'new-customer', component: CreateOrEditCustomerPageComponent, data: { breadcrumb: 'Nuevo Cliente' } },
  { path: 'edit/:id', component: CreateOrEditCustomerPageComponent, data: { breadcrumb: 'Editar Cliente' } },
  { path: 'show/:id', component: ShowCustomerPageComponent, data: { breadcrumb: 'Información Cliente' } },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListEnterprisesPageComponent } from './pages/list-enterprises-page/list-enterprises-page.component';
import { CreateOrEditEnterprisePageComponent } from './pages/create-or-edit-enterprise-page/create-or-edit-enterprise-page.component';
import { ShowEnterprisePageComponent } from './pages/show-enterprise-page/show-enterprise-page.component';

const routes: Routes = [
  { path: '', component: ListEnterprisesPageComponent },
  { path: 'new-enterprise', component: CreateOrEditEnterprisePageComponent  },
  { path: 'edit/:id', component: CreateOrEditEnterprisePageComponent },
  { path: 'show/:id', component: ShowEnterprisePageComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnterprisesRoutingModule { }

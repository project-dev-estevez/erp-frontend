import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListEmpoyeesPageComponent } from './pages/list-empoyees-page/list-empoyees-page.component';
import { CreateOrEditEmpoyeesPageComponent } from './pages/create-or-edit-empoyees-page/create-or-edit-empoyees-page.component';
import { ShowEmpoyeesPageComponent } from './pages/show-empoyees-page/show-empoyees-page.component';

const routes: Routes = [
  { path: '', component: ListEmpoyeesPageComponent },
  { path: 'new-empoyees', component: CreateOrEditEmpoyeesPageComponent },
  { path: 'edit/:id', component: CreateOrEditEmpoyeesPageComponent },
  { path: 'show/:id', component: ShowEmpoyeesPageComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpoyeesRoutingModule { }

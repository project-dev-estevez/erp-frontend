import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListDepartmentsPageComponent } from './pages/list-departments-page/list-departments-page.component';
import { CreateOrEditDepartmentPageComponent } from './pages/create-or-edit-department-page/create-or-edit-department-page.component';
import { ShowDepartmentPageComponent } from './pages/show-department-page/show-department-page.component';

const routes: Routes = [
  { path: '', component: ListDepartmentsPageComponent },
  { path: 'new-department', component: CreateOrEditDepartmentPageComponent  },
  { path: 'edit/:id', component: CreateOrEditDepartmentPageComponent },
  { path: 'show/:id', component: ShowDepartmentPageComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepartmentsRoutingModule { }

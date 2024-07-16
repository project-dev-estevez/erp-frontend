import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartmentsRoutingModule } from './departments-routing.module';
import { ListDepartmentsPageComponent } from './pages/list-departments-page/list-departments-page.component';
import { CreateOrEditDepartmentPageComponent } from './pages/create-or-edit-department-page/create-or-edit-department-page.component';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [
    ListDepartmentsPageComponent,
    CreateOrEditDepartmentPageComponent
  ],
  imports: [
    CommonModule,
    DepartmentsRoutingModule,
    SharedModule
  ]
})
export class DepartmentsModule { }

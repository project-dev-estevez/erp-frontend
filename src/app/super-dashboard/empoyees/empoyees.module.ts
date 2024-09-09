import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmpoyeesRoutingModule } from './empoyees-routing.module';
import { ListEmpoyeesPageComponent } from './pages/list-empoyees-page/list-empoyees-page.component';
import { CreateOrEditEmpoyeesPageComponent } from './pages/create-or-edit-empoyees-page/create-or-edit-empoyees-page.component';
import { SharedModule } from '@shared/shared.module';

import { ShowEmpoyeesPageComponent } from './pages/show-empoyees-page/show-empoyees-page.component';


@NgModule({
  declarations: [
    ListEmpoyeesPageComponent,
    CreateOrEditEmpoyeesPageComponent,
    ShowEmpoyeesPageComponent
  ],
  imports: [
    CommonModule,
    EmpoyeesRoutingModule,
    SharedModule
  ]
})
export class EmpoyeesModule { }

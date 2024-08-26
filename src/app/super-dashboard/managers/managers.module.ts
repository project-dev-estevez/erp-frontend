import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagersRoutingModule } from './managers-routing.module';
import { ListManagersPageComponent } from './pages/list-managers-page/list-managers-page.component';
import { CreateOrEditManagerPageComponent } from './pages/create-or-edit-manager-page/create-or-edit-manager-page.component';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [
    ListManagersPageComponent,
    CreateOrEditManagerPageComponent
  ],
  imports: [
    CommonModule,
    ManagersRoutingModule,
    SharedModule
  ]
})
export class ManagersModule { }

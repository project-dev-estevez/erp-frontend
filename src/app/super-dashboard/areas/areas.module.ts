import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AreasRoutingModule } from './areas-routing.module';
import { ListAreasPageComponent } from './pages/list-areas-page/list-areas-page.component';
import { CreateOrEditAreaPageComponent } from './pages/create-or-edit-area-page/create-or-edit-area-page.component';
import { ShowAreaPageComponent } from './pages/show-area-page/show-area-page.component';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [
    ListAreasPageComponent,
    CreateOrEditAreaPageComponent,
    ShowAreaPageComponent
  ],
  imports: [
    CommonModule,
    AreasRoutingModule,
    SharedModule
  ]
})
export class AreasModule { }

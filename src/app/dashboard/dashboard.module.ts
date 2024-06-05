import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { MainContentPageComponent } from './pages/main-content-page/main-content-page.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    MainContentPageComponent,

  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuperDashboardRoutingModule } from './super-dashboard-routing.module';
import { SuperMainContentPageComponent } from './pages/super-main-content-page/super-main-content-page.component';


@NgModule({
  declarations: [
    SuperMainContentPageComponent
  ],
  imports: [
    CommonModule,
    SuperDashboardRoutingModule
  ]
})
export class SuperDashboardModule { }

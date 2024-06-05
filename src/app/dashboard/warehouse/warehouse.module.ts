import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WarehouseRoutingModule } from './warehouse-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { MainContentWarehousePageComponent } from './pages/main-content-warehouse-page/main-content-warehouse-page.component';
import { WarehouseGeneralEntryComponent } from './components/warehouse-general-entry/warehouse-general-entry.component';
import { ProductDetailPageComponent } from './pages/product-detail-page/product-detail-page.component';


@NgModule({
  declarations: [
  
    MainContentWarehousePageComponent,
       WarehouseGeneralEntryComponent,
       ProductDetailPageComponent
  ],
  imports: [
    CommonModule,
    WarehouseRoutingModule,
    SharedModule
  ]
})
export class WarehouseModule { }

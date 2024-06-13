import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WarehouseRoutingModule } from './warehouse-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { MainContentWarehousePageComponent } from './pages/main-content-warehouse-page/main-content-warehouse-page.component';
import { WarehouseGeneralEntryComponent } from './components/warehouse-general-entry/warehouse-general-entry.component';
import { WarehouseGeneralProductsComponent } from './components/warehouse-general-products/warehouse-general-products.component';
import { ProductDetailPageComponent } from './pages/product-detail-page/product-detail-page.component';
import { AssetsProductsComponent } from './components/warehouse-general-products/assets-products/assets-products.component';
import { ToolsProductsComponent } from './components/warehouse-general-products/tools-products/tools-products.component';
import { FuelProductsComponent } from './components/warehouse-general-products/fuel-products/fuel-products.component';
import { SafetyHygieneProductsComponent } from './components/warehouse-general-products/safety-hygiene-products/safety-hygiene-products.component';
import { WarehouseGeneralExitComponent } from './components/warehouse-general-exit/warehouse-general-exit.component';


@NgModule({
  declarations: [

    MainContentWarehousePageComponent,
       WarehouseGeneralEntryComponent,
       WarehouseGeneralProductsComponent,
       ProductDetailPageComponent,
       AssetsProductsComponent,
       ToolsProductsComponent,
       FuelProductsComponent,
       SafetyHygieneProductsComponent,
       WarehouseGeneralExitComponent
  ],
  imports: [
    CommonModule,
    WarehouseRoutingModule,
    SharedModule
  ]
})
export class WarehouseModule { }

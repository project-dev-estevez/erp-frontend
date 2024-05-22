import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreRoutingModule } from './store-routing.module';
import { MainContentStorePageComponent } from './pages/main-content-store-page/main-content-store-page.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    MainContentStorePageComponent
  ],
  imports: [
    CommonModule,
    StoreRoutingModule,
    SharedModule
  ]
})
export class StoreModule { }

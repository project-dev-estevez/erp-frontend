import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CeosRoutingModule } from './ceos-routing.module';
import { ListCeosPageComponent } from './pages/list-ceos-page/list-ceos-page.component';
import { SharedModule } from '@shared/shared.module';
import { CreateOrEditCeoPageComponent } from './pages/create-or-edit-ceo-page/create-or-edit-ceo-page.component';
import { ShowCeoPageComponent } from './pages/show-ceo-page/show-ceo-page.component';


@NgModule({
  declarations: [
    ListCeosPageComponent,
    CreateOrEditCeoPageComponent,
    ShowCeoPageComponent
  ],
  imports: [
    CommonModule,
    CeosRoutingModule,
    SharedModule
  ]
})
export class CeosModule { }

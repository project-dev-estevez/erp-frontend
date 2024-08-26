import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirectionsRoutingModule } from './directions-routing.module';
import { CreateOrEditDirectionPageComponent } from './pages/create-or-edit-direction-page/create-or-edit-direction-page.component';
import { ListDirectionsPageComponent } from './pages/list-directions-page/list-directions-page.component';
import { SharedModule } from '@shared/shared.module';
import { ShowDirectionPageComponent } from './pages/show-direction-page/show-direction-page.component';


@NgModule({
  declarations: [
    CreateOrEditDirectionPageComponent,
    ListDirectionsPageComponent,
    ShowDirectionPageComponent
  ],
  imports: [
    CommonModule,
    DirectionsRoutingModule,
    SharedModule
  ]
})
export class DirectionsModule { }

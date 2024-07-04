import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirectionsRoutingModule } from './directions-routing.module';
import { CreateOrEditDirectionComponent } from './pages/create-or-edit-direction/create-or-edit-direction.component';


@NgModule({
  declarations: [
    CreateOrEditDirectionComponent
  ],
  imports: [
    CommonModule,
    DirectionsRoutingModule
  ]
})
export class DirectionsModule { }

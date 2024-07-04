import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RootRoutingModule } from './root-routing.module';
import { EditUserPageComponent } from './pages/edit-user-page/edit-user-page.component';
import { SharedModule } from '../../shared/shared.module';
import { EditProfileComponent } from './pages/edit-profile/edit-profile.component';


@NgModule({
  declarations: [
    EditUserPageComponent,
    EditProfileComponent
  ],
  imports: [
    CommonModule,
    RootRoutingModule,
    SharedModule
  ]
})
export class RootModule { }

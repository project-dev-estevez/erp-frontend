import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';



@NgModule({
  declarations: [
    AdminLayoutComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ],
  exports: [
    MaterialModule
  ]
})
export class SharedModule { }

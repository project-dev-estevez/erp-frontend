import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReusableTableComponent } from './components/reusable-table/reusable-table.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

import { PieChartComponent } from './components/charts/pie-chart/pie-chart.component';
import { BaseChartDirective } from 'ng2-charts';
import { ColumnValuePipe } from './pipes/column-value.pipe';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { TopToolbarComponent } from './components/top-toolbar/top-toolbar.component';


@NgModule({
  declarations: [
    AdminLayoutComponent,
    HeaderComponent,
    ReusableTableComponent,
    SidebarComponent,
    PieChartComponent,
    ColumnValuePipe,
    BreadcrumbComponent,
    TopToolbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SweetAlert2Module.forRoot(),
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule,
    BaseChartDirective
  ],
  exports: [
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule,
    ReusableTableComponent,
    SidebarComponent,
    BreadcrumbComponent,
    TopToolbarComponent,
    PieChartComponent
  ]
})
export class SharedModule { }

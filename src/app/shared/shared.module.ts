import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReusableTableComponent } from './components/reusable-table/reusable-table.component';
import { PieChartComponent } from './components/charts/pie-chart/pie-chart.component';
import { BaseChartDirective } from 'ng2-charts';
import { ColumnValuePipe } from './pipes/column-value.pipe';



@NgModule({
  declarations: [
    AdminLayoutComponent,
    HeaderComponent,
    ReusableTableComponent,
    PieChartComponent,
    ColumnValuePipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule,
    BaseChartDirective
  ],
  exports: [
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule,
    ReusableTableComponent
  ]
})
export class SharedModule { }

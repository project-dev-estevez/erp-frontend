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
import { ProgressBarComponent } from './components/progressbar/progressbar.component';
import { SuperAdminLayoutComponent } from './layouts/super-admin-layout/super-admin-layout.component';
import { Error404PageComponent } from './pages/error404-page/error404-page.component';
import { MultilevelSidenavComponent } from './components/sidebar/multilevel-sidenav/multilevel-sidenav.component';
import { ReusableTableBackendComponent } from './components/reusable-table-backend/reusable-table-backend.component';
import { SearchWithCreateComponent } from './components/search-with-create/search-with-create.component';


@NgModule({
  declarations: [
    AdminLayoutComponent,
    HeaderComponent,
    ReusableTableComponent,
    SidebarComponent,
    PieChartComponent,
    ColumnValuePipe,
    BreadcrumbComponent,
    TopToolbarComponent,
    ProgressBarComponent,
    SuperAdminLayoutComponent,
    Error404PageComponent,
    MultilevelSidenavComponent,
    ReusableTableBackendComponent,
    SearchWithCreateComponent
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
    PieChartComponent,
    ProgressBarComponent,
    Error404PageComponent,
    ReusableTableBackendComponent,
    SearchWithCreateComponent
  ]
})
export class SharedModule { }

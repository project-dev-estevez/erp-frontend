import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainContentPageComponent } from './pages/main-content-page/main-content-page.component';
import { PieChartComponent } from '../shared/components/charts/pie-chart/pie-chart.component';
import { AdminLayoutComponent } from '@shared/layouts/admin-layout/admin-layout.component';

const routes: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      { path: '', component: MainContentPageComponent },
      { path: 'grafica', component: PieChartComponent, data: { breadcrumb: 'Grafica' } },
      { path: 'root', loadChildren: () => import('./root/root.module').then( m => m.RootModule), data: { breadcrumb: 'Super usuario' } },
      { path: 'warehouse', loadChildren: () => import('./warehouse/warehouse.module').then( m => m.WarehouseModule), data: { breadcrumb: 'Almacén' }},
      { path: '**', redirectTo: '' }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }

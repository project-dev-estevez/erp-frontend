import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainContentPageComponent } from './pages/main-content-page/main-content-page.component';
import { PieChartComponent } from '../shared/components/charts/pie-chart/pie-chart.component';

const routes: Routes = [
  {
    // /dashboard
    path: '',
    component: MainContentPageComponent
  },
  {
    path: 'grafica',
    component: PieChartComponent,
    data: { breadcrumb: 'grafica' }
  },
  {
    path: 'root',
    loadChildren: () => import('./root/root.module').then( m => m.RootModule ),
    data: { breadcrumb: 'root' }
  },
  {
    path: 'warehouse',
    loadChildren: () => import('./warehouse/warehouse.module').then( m => m.WarehouseModule ),
    data: { breadcrumb: 'warehouse' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }

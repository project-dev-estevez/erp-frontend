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
    component: PieChartComponent
  },
  {
    path: 'root',
    loadChildren: () => import('./root/root.module').then( m => m.RootModule )
  },
  {
    path: 'store',
    loadChildren: () => import('./store/store.module').then( m => m.StoreModule )
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }

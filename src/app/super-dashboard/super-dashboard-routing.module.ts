import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuperMainContentPageComponent } from './pages/super-main-content-page/super-main-content-page.component';

const routes: Routes = [
  {
    path: '',
    component: SuperMainContentPageComponent
  },
  {
    path: 'directions',
    loadChildren: () => import('./directions/directions.module').then(m => m.DirectionsModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuperDashboardRoutingModule { }

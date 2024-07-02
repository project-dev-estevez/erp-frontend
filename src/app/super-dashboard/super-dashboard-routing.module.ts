import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuperMainContentPageComponent } from './pages/super-main-content-page/super-main-content-page.component';

const routes: Routes = [
  {
    path: '',
    component: SuperMainContentPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuperDashboardRoutingModule { }

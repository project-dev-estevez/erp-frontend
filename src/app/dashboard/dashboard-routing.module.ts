import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainContentPageComponent } from './pages/main-content-page/main-content-page.component';

const routes: Routes = [
  {
    // /dashboard
    path: '',
    component: MainContentPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }

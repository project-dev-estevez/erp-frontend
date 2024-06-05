import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainContentWarehousePageComponent } from './pages/main-content-warehouse-page/main-content-warehouse-page.component';

const routes: Routes = [
  {
    path: '',
    component: MainContentWarehousePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WarehouseRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainContentWarehousePageComponent } from './pages/main-content-warehouse-page/main-content-warehouse-page.component';
import { ProductDetailPageComponent } from './pages/product-detail-page/product-detail-page.component';

const routes: Routes = [
  {
    path: '',
    component: MainContentWarehousePageComponent
  },
  {
    path: 'product-detail/:id',
    component: ProductDetailPageComponent,
    data: { breadcrumb: 'product-detail' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WarehouseRoutingModule { }

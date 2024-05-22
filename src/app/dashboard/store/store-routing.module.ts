import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainContentStorePageComponent } from './pages/main-content-store-page/main-content-store-page.component';

const routes: Routes = [
  {
    path: '',
    component: MainContentStorePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoreRoutingModule { }

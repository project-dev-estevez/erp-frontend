import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListAreasPageComponent } from './pages/list-areas-page/list-areas-page.component';
import { CreateOrEditAreaPageComponent } from './pages/create-or-edit-area-page/create-or-edit-area-page.component';
import { ShowAreaPageComponent } from './pages/show-area-page/show-area-page.component';

const routes: Routes = [
  { path: '', component: ListAreasPageComponent },
  { path: 'new-area', component: CreateOrEditAreaPageComponent, data: { breadcrumb: 'Nueva Área' } },
  { path: 'edit/:id', component: CreateOrEditAreaPageComponent, data: { breadcrumb: 'Editar Área' } },
  { path: 'show/:id', component: ShowAreaPageComponent, data: { breadcrumb: 'Información Área' } },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AreasRoutingModule { }

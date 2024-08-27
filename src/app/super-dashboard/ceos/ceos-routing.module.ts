import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCeosPageComponent } from './pages/list-ceos-page/list-ceos-page.component';
import { CreateOrEditCeoPageComponent } from './pages/create-or-edit-ceo-page/create-or-edit-ceo-page.component';
import { ShowCeoPageComponent } from './pages/show-ceo-page/show-ceo-page.component';

const routes: Routes = [
  {path: '', component: ListCeosPageComponent},
  {path: 'new-ceo', component: CreateOrEditCeoPageComponent},
  {path: 'edit/:id', component: CreateOrEditCeoPageComponent},
  {path: 'show/:id', component: ShowCeoPageComponent},
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CeosRoutingModule { }

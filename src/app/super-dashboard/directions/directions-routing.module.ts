import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateOrEditDirectionPageComponent } from './pages/create-or-edit-direction-page/create-or-edit-direction-page.component';
import { ListDirectionsPageComponent } from './pages/list-directions-page/list-directions-page.component';
import { ShowDirectionPageComponent } from './pages/show-direction-page/show-direction-page.component';

const routes: Routes = [
  { path: '', component: ListDirectionsPageComponent, data: { breadcrumb: 'Direcciones' }},
  { path: 'new-direction', component: CreateOrEditDirectionPageComponent },
  { path: 'edit/:id', component: CreateOrEditDirectionPageComponent },
  { path: 'show/:id', component: ShowDirectionPageComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DirectionsRoutingModule { }

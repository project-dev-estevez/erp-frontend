import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListManagersPageComponent } from './pages/list-managers-page/list-managers-page.component';
import { CreateOrEditManagerPageComponent } from './pages/create-or-edit-manager-page/create-or-edit-manager-page.component';
import { ShowManagerPageComponent } from './pages/show-manager-page/show-manager-page.component';

const routes: Routes = [
  { path: '', component: ListManagersPageComponent },
  { path: 'new-manager', component: CreateOrEditManagerPageComponent },
  { path: 'edit/:id', component: CreateOrEditManagerPageComponent },
  { path: 'show/:id', component: ShowManagerPageComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagersRoutingModule { }

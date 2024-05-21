import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditUserPageComponent } from './pages/edit-user-page/edit-user-page.component';

const routes: Routes = [
  {
    path: 'edit-user',
    component: EditUserPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RootRoutingModule { }

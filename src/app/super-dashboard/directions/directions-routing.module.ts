import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateOrEditDirectionComponent } from './pages/create-or-edit-direction/create-or-edit-direction.component';

const routes: Routes = [
  {
    path: 'create-or-edit',
    component: CreateOrEditDirectionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DirectionsRoutingModule { }

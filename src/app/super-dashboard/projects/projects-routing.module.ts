import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListProjectsPageComponent } from './pages/list-projects-page/list-projects-page.component';
import { CreateOrEditProjectPageComponent } from './pages/create-or-edit-project-page/create-or-edit-project-page.component';
import { ShowProjectPageComponent } from './pages/show-project-page/show-project-page.component';

const routes: Routes = [
  { path: '', component: ListProjectsPageComponent },
  { path: 'new-project', component: CreateOrEditProjectPageComponent, data: { breadcrumb: 'Nuevo Proyecto' } },
  { path: 'edit/:id', component: CreateOrEditProjectPageComponent, data: { breadcrumb: 'Editar Proyecto' } },
  { path: 'show/:id', component: ShowProjectPageComponent, data: { breadcrumb: 'Ver Proyecto' } },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }

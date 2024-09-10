import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ListProjectsPageComponent } from './pages/list-projects-page/list-projects-page.component';
import { ShowProjectPageComponent } from './pages/show-project-page/show-project-page.component';
import { CreateOrEditProjectPageComponent } from './pages/create-or-edit-project-page/create-or-edit-project-page.component';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [
    ListProjectsPageComponent,
    ShowProjectPageComponent,
    CreateOrEditProjectPageComponent
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    SharedModule
  ]
})
export class ProjectsModule { }

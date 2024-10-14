import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Component} from '@angular/core';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ListProjectsPageComponent } from './pages/list-projects-page/list-projects-page.component';
import { ShowProjectPageComponent } from './pages/show-project-page/show-project-page.component';
import { CreateOrEditProjectPageComponent } from './pages/create-or-edit-project-page/create-or-edit-project-page.component';
import { SharedModule } from '@shared/shared.module';
import { ProjectGeneralInfoComponent } from './components/project-general-info/project-general-info.component';
import { ProjectTeamComponent } from './components/project-team/project-team.component';
import { ProjectWorkScheduleComponent } from './components/project-work-schedule/project-work-schedule.component';
import { ProjectMachineryAndToolsComponent } from './components/project-machinery-and-tools/project-machinery-and-tools.component';
import { ProjectMaterialsComponent } from './components/project-materials/project-materials.component';
import { ProjectBudgetComponent } from './components/project-budget/project-budget.component';
import { ProjectInfrastructureComponent } from './components/project-infrastructure/project-infrastructure.component';

@NgModule({
  declarations: [
    ListProjectsPageComponent,
    ShowProjectPageComponent,
    CreateOrEditProjectPageComponent,
    ProjectGeneralInfoComponent,
    ProjectTeamComponent,
    ProjectWorkScheduleComponent,
    ProjectMachineryAndToolsComponent,
    ProjectMaterialsComponent,
    ProjectBudgetComponent,
    ProjectInfrastructureComponent
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    SharedModule,
  ]
})
export class ProjectsModule {
}

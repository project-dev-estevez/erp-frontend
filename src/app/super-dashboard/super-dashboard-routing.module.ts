import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuperMainContentPageComponent } from './pages/super-main-content-page/super-main-content-page.component';
import { SuperAdminLayoutComponent } from '@shared/layouts/super-admin-layout/super-admin-layout.component';

const routes: Routes = [
  {
    path: '',
    component: SuperAdminLayoutComponent,
    children: [
      { path: '', component: SuperMainContentPageComponent },
      { path: 'managers', loadChildren: () => import('./managers/managers.module').then( m => m.ManagersModule), data: { breadcrumb: 'Managers' } },
      { path: 'directions', loadChildren: () => import('./directions/directions.module').then(m => m.DirectionsModule), data: { breadcrumb: 'Direcciones' } },
      { path: 'departments', loadChildren: () => import('./departments/departments.module').then(m => m.DepartmentsModule), data: { breadcrumb: 'Departamentos' } },
      { path: 'enterprises', loadChildren: () => import('./enterprises/enterprises.module').then(m => m.EnterprisesModule), data: { breadcrumb: 'Empresas' } },
      { path: 'ceos', loadChildren: () => import('./ceos/ceos.module').then(m => m.CeosModule), data: { breadcrumb: 'CEOs' } },
      { path: 'areas', loadChildren: () => import('./areas/areas.module').then(m => m.AreasModule), data: { breadcrumb: 'Areas' } },
      { path: 'empoyees', loadChildren: () => import('./empoyees/empoyees.module').then(m => m.EmpoyeesModule), data: { breadcrumb: 'Puestos' } },
      { path: 'customers', loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule), data: { breadcrumb: 'Clientes' } },
      { path: 'projects', loadChildren: () => import('./projects/projects.module').then(m => m.ProjectsModule), data: { breadcrumb: 'Proyectos' } },
      { path: '**', redirectTo: ''}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuperDashboardRoutingModule { }

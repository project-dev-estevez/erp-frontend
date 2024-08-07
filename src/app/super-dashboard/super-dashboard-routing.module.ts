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
      { path: 'directions', loadChildren: () => import('./directions/directions.module').then(m => m.DirectionsModule), data: { breadcrumb: 'Direcciones' } },
      { path: 'departments', loadChildren: () => import('./departments/departments.module').then(m => m.DepartmentsModule), data: { breadcrumb: 'Departamentos' } },
      { path: 'enterprises', loadChildren: () => import('./enterprises/enterprises.module').then(m => m.EnterprisesModule), data: { breadcrumb: 'Empresas' } },
      { path: '**', redirectTo: ''}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuperDashboardRoutingModule { }

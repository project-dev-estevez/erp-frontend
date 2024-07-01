import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './shared/layouts/admin-layout/admin-layout.component';
import { DashboardGuard } from './authentication/guards/dashboard.guard';
import { SuperAdminLayoutComponent } from '@shared/layouts/super-admin-layout/super-admin-layout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    loadChildren: () => import('./authentication/authentication.module').then( m => m.AuthenticationModule )
  },

  // Super Admin Dashboard
  {
    path: 'super-dashboard',
    component: SuperAdminLayoutComponent,
    data: { breadcrumb: 'Super Dashboard' },
    children: [
      {
        path: '',
        loadChildren: () => import('./super-dashboard/super-dashboard.module').then( m => m.SuperDashboardModule )
      }
    ]
  },

  // Admin Dashboard
  {
    path: 'dashboard',
    //canLoad: [ DashboardGuard ],
    //canActivate: [ DashboardGuard ],
    component: AdminLayoutComponent,
    data: { breadcrumb: 'Dashboard' },
    children: [
      {
        path: '',
        loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardModule )
      }
    ]
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

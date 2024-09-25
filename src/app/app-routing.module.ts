import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404PageComponent } from '@shared/pages/error404-page/error404-page.component';
import { AuthGuard } from './authentication/guards/auth.guard';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./authentication/authentication.module').then( m => m.AuthenticationModule )
  },
  // Super Admin Dashboard
  {
    path: 'super-dashboard',
    data: { breadcrumb: 'Inicio' },
    loadChildren: () => import('./super-dashboard/super-dashboard.module').then( m => m.SuperDashboardModule ),
    canActivate: [AuthGuard],
    canLoad: [AuthGuard]
  },
  // Admin Dashboard
  {
    path: 'dashboard',
    data: { breadcrumb: 'Inicio' },
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardModule ),
    canActivate: [AuthGuard],
    canLoad: [AuthGuard]
  },
  {
    path: '404',
    component: Error404PageComponent
  },
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

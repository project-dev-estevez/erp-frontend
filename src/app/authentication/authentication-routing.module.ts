import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPagesComponent } from './pages/login-pages/login-pages.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { ForgotPasswordPageComponent } from './pages/forgot-password-page/forgot-password-page.component';
import { ResetPasswordPageComponent } from './pages/reset-password-page/reset-password-page.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'login', component: LoginPagesComponent },
      { path: 'register', component: RegisterPageComponent },
      { path: 'forgot-password', component: ForgotPasswordPageComponent },
      { path: '', redirectTo: 'login', pathMatch: 'full'},
      { path: 'reset-password', component: ResetPasswordPageComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }

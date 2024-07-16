import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LoginPagesComponent } from './pages/login-pages/login-pages.component';
import { SharedModule } from '../shared/shared.module';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { ForgotPasswordPageComponent } from './pages/forgot-password-page/forgot-password-page.component';
import { ResetPasswordPageComponent } from './pages/reset-password-page/reset-password-page.component';



@NgModule({
  declarations: [
    LoginPagesComponent,
    RegisterPageComponent,
    ForgotPasswordPageComponent,
    ResetPasswordPageComponent
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    SharedModule
  ]
})
export class AuthenticationModule { }

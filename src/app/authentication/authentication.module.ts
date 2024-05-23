import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LoginPagesComponent } from './pages/login-pages/login-pages.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    LoginPagesComponent
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    SharedModule
  ]
})
export class AuthenticationModule { }

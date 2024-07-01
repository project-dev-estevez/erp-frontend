import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';
import { SweetAlertService } from '../../../shared/services/sweet-alert.service';
import { CheckTokenResponse, LoginResponse } from '../../interfaces/authentication.interfaces';

@Component({
  selector: 'app-login-pages',
  templateUrl: './login-pages.component.html',
  styleUrl: './login-pages.component.scss'
})
export class LoginPagesComponent implements OnInit
{
  public canShowPassword: boolean = false;

  public loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required]],
    password: ['', [Validators.required, Validators.minLength(8)]]
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private sweetAlert: SweetAlertService,
    private authService: AuthenticationService
  )
  {}

  ngOnInit(): void {
    this.checkToken();
  }

  private checkDashboardToRedirect( data: LoginResponse | CheckTokenResponse ){
    
    this.authService.setToken( data.token );
    const { roles = [] } = data;
    const isSuperAdmin = roles.includes('ceo') || roles.includes('generalDirector') || roles.includes('director');

    if( isSuperAdmin )
      return this.router.navigate(['/super-dashboard']);

    return this.router.navigate(['/dashboard']);
  }

  private refreshToken( checkTokenResponse: CheckTokenResponse ) {
    const { token = '' } = checkTokenResponse;
    if(!token) return;

    this.authService.setToken( token );
  }

  login(){
    this.authService.login( this.loginForm.value ).subscribe(
      response => {
        this.checkDashboardToRedirect( response );
      },
      errorResponse => {
        const errorDetail = errorResponse.error?.message || 'Error';
        this.sweetAlert.presentError( errorDetail );
      }
    );
  }

  checkToken(){
    if( !this.authService.getToken() ) return; 

    this.authService.checkToken().subscribe(
      response => {
        this.refreshToken( response );
        this.checkDashboardToRedirect( response );
      },
      () => {
        localStorage.clear();
      }
    );
  }

}

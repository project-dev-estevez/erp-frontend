import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';
import { SweetAlertService } from '../../../shared/services/sweet-alert.service';

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

  login(){
    this.authService.login( this.loginForm.value ).subscribe(
      response => {
        console.log(response);
        this.authService.setToken( response.token );        
        this.router.navigate(['/dashboard']);
      },
      errorResponse => {
        console.log(errorResponse)
        const errorDetail = errorResponse.error?.message || 'Error';
        this.sweetAlert.presentError( errorDetail );
      }
    );
  }

  checkToken(){
    if( !this.authService.getToken() ) return;

    this.authService.checkToken().subscribe(
      response => {
        this.router.navigate(['/dashboard']);
      },
      errorResponse => {
        localStorage.clear();
      }
    );
  }

}

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';
import { SweetAlertService } from '../../../shared/services/sweet-alert.service';

@Component({
  selector: 'app-login-pages',
  templateUrl: './login-pages.component.html',
  styleUrl: './login-pages.component.scss'
})
export class LoginPagesComponent
{
  public loginForm: FormGroup = this.fb.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required, Validators.minLength(8)]]
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private sweetAlert: SweetAlertService,
    private authService: AuthenticationService
  )
  {}


  login(){
    this.authService.login( this.loginForm.value ).subscribe(
      response => {
        localStorage.setItem('X-API-KEY', response.token );
        this.router.navigate(['/dashboard']);
      },
      errorResponse => {
        const errorDetail = errorResponse.error.message || 'Error';
        this.sweetAlert.presentError( errorDetail );
      }
    );
  }

}

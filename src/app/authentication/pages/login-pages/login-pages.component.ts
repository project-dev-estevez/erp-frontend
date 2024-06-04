import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';

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
    private authService: AuthenticationService
  )
  {}


  login(){
    this.authService.login( this.loginForm.value ).subscribe(
      response => {
        localStorage.setItem('X-API-KEY', response.token );
        this.router.navigate(['/dashboard']);
      },
      error => {
        console.log("mmaaaallll");
        console.log(error);
      }
    );
  }

}

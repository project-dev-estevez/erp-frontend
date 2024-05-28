import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-login-pages',
  templateUrl: './login-pages.component.html',
  styleUrl: './login-pages.component.scss'
})
export class LoginPagesComponent 
{
  public loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required]],
    password: ['', [Validators.required, Validators.minLength(8)]]
  });

  constructor(
    private fb: FormBuilder,
    private authService: AuthenticationService
  )
  {}

  login(){
    this.authService.login( this.loginForm.value ).subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.log("mmaaaallll");
        console.log(error);
      }
    );
  }

}

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../../services/authentication.service';
import { SpinnerHandlerService } from '../../services/spinner-handler.service';

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

spinnerActive: boolean = true;

  constructor(
    private fb: FormBuilder,
    private authService: AuthenticationService,
    public spinnerHandler: SpinnerHandlerService
  )
  {
    this.spinnerHandler.showSpinner.subscribe(this.showSpinner.bind(this));
  }


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

  showSpinner = (state: boolean): void => {
    this.spinnerActive = state;
  };

}

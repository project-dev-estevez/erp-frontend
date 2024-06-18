import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.scss'
})
export class RegisterPageComponent {

  /*public loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required]],
    password: ['', [Validators.required, Validators.minLength(8)]]
  });*/

  public registerForm : FormGroup = this.fb.group({
    email: ['', [Validators.required]],
    password: ['', [Validators.required]],
    fullName: ['', [Validators.required]]
  });

  constructor (
    private fb : FormBuilder,
    private authService: AuthenticationService
  )
  {}

  register()
  {    
    const register = this.registerForm.value;
    this.authService.register(register).subscribe(
      response => {
        console.log(response);
      },
      errorResponse => {
        console.log(errorResponse);
      }
    );
  }

}

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../../services/authentication.service';
import { SweetAlertService } from '@shared/services/sweet-alert.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.scss'
})
export class RegisterPageComponent {

  public registerForm : FormGroup = this.fb.group({
    fullName: ['', [Validators.required]],
    email: ['', [Validators.required]],
    password: ['', [Validators.required]],
    confirmPassword: ['', [Validators.required]]    
  });

  constructor (
    private fb : FormBuilder,
    private authService: AuthenticationService,
    private sweetAlert: SweetAlertService
  )
  {}

  register()
  {    
    const registerData = this.registerForm.value;
    if( registerData.password !== registerData.confirmPassword )
    {
      this.sweetAlert.presentError('Las contraseñas no coinciden');
      return;
    }

    this.authService.register(registerData).subscribe(
      response => {
        this.sweetAlert.presentSuccess('Usuario registrado correctamente');
      },
      errorResponse => {
        const errorMessage = errorResponse.error.message || 'Error al registrar usuario';
        this.sweetAlert.presentError(errorMessage);
      }
    );
  }

}

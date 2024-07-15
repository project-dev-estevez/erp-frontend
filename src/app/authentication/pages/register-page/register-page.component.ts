import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../../services/authentication.service';
import { SweetAlertService } from '@shared/services/sweet-alert.service';
import { repeatPasswordValidator } from './repeat-password.validator';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.scss'
})
export class RegisterPageComponent {

  public canShowPassword: boolean = false;
  public canShowPasswordConfirm: boolean = false;

  isvalidField(field:string): boolean | null{
    return this.registerForm.controls[field].errors 
    && this.registerForm.controls[field].touched
  }

  getFieldError(field:string): string | null {
    if (!this.registerForm.controls[field] ) return null
    
    const errors = this.registerForm.controls[field].errors || {}

    for (const key of Object.keys(errors)) {
      switch(key){
        case 'required':
          return 'Este campo es obligatorio'
        case 'minlength':
          return "Este campo debe tener mínimo 8 caracteres"
        case 'maxlength':
          return "El campo excede los 150 caracteres"
        case 'email':
          return "Introduce un correo válido"
        case 'pattern':
          return "La contraseña debe tener una letra mayúscula y un número"
        default:
          return null
      }
    }
    return null
  }

  public registerForm: FormGroup = this.fb.group({
    fullName: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(150)]],
    email: ['', [Validators.required, Validators.email, Validators.minLength(8)]],
    password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(150)]],
    confirmPassword: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(150)]]    
  }, { validators: [repeatPasswordValidator]}   
);

  constructor (
    private fb: FormBuilder,
    private authService: AuthenticationService,
    private sweetAlert: SweetAlertService
  )
  {}

  register()
  {    
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched()
      return
    }
    const registerData = this.registerForm.value;
    const { confirmPassword, ...userData } = registerData;
    /* if( registerData.password !== registerData.confirmPassword )
    {
      this.sweetAlert.presentError('Las contraseñas no coinciden');
      return;
    } */

    this.authService.register(userData).subscribe(
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

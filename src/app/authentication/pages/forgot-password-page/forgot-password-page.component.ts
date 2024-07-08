import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../../services/authentication.service';
import { SweetAlertService } from '@shared/services/sweet-alert.service';

@Component({
  selector: 'app-forgot-password-page',
  templateUrl: './forgot-password-page.component.html',
  styleUrl: './forgot-password-page.component.scss'
})
export class ForgotPasswordPageComponent {

  public forgotPasswordForm : FormGroup = this.fb.group({
    email: ['', [Validators.required]], 
  });

  constructor (
    private fb : FormBuilder,
    private authService: AuthenticationService,
    private sweetAlert: SweetAlertService
  )
  {}

  forgotPassword()
  {    
    if (this.forgotPasswordForm.invalid) {
      this.forgotPasswordForm.markAllAsTouched()
      return
    }
    const forgotPasswordData = this.forgotPasswordForm.value;

    this.authService.forgotPassword(forgotPasswordData).subscribe(
      response => {
        this.sweetAlert.presentSuccess('Se envio el correo correctamente');
      },
      errorResponse => {
        const errorMessage = errorResponse.error.message || 'Error al enviar el correo';
        this.sweetAlert.presentError(errorMessage);
      }
    );
  }

}

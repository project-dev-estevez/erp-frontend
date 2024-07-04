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

  public forgotForm : FormGroup = this.fb.group({
    email: ['', [Validators.required]], 
  });

  constructor (
    private fb : FormBuilder,
    private authService: AuthenticationService,
    private sweetAlert: SweetAlertService
  )
  {}

  forgot()
  {    
    const forgotData = this.forgotForm.value;

    this.authService.forgot(forgotData).subscribe(
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

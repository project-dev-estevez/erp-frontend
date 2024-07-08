import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../../services/authentication.service';
import { SweetAlertService } from '@shared/services/sweet-alert.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-reset-password-page',
  templateUrl: './reset-password-page.component.html',
  styleUrl: './reset-password-page.component.scss'
})
export class ResetPasswordPageComponent implements OnInit {

  public resetPasswordForm : FormGroup = this.fb.group({
    newPassword: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(150)]],
    confirmPassword: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(150)]]
  });

  token: string = '';

  constructor (
    private fb : FormBuilder,
    private authService: AuthenticationService,
    private sweetAlert: SweetAlertService,
    private router: Router,
    private route: ActivatedRoute
  )
  {}

  ngOnInit(): void {
    // Obtener el token desde los parámetros de la consulta
    this.token = this.route.snapshot.queryParams['token'];
    
    // Alternativamente, puedes suscribirte a cambios en los parámetros de la consulta
    // this.route.queryParams.subscribe(params => {
    //   this.token = params['token'];
    // });
  }

  resetPassword()
  {    
    if (this.resetPasswordForm.invalid) {
      this.resetPasswordForm.markAllAsTouched()
      return
    }
 
    console.log(this.token);
    const resetData = this.resetPasswordForm.value;
    const { confirmPassword, ...userData } = resetData;

    userData.token = this.token;

    this.authService.resetPassword(userData).subscribe(
      response => {
        console.log('Password reset successful', response);
        // Redirigir a otra ruta después de restablecer la contraseña
        this.router.navigate(['/auth']);
      },
      error => {
        console.error('Password reset error', error);
      }
    );
  }

}

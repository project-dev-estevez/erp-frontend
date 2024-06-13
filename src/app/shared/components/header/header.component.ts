import { Component } from '@angular/core';
import { AuthenticationService } from '../../../authentication/services/authentication.service';
import { Router } from '@angular/router';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  constructor(
    private authService: AuthenticationService,
    private router: Router
  )
  {}

  logout() {

    this.authService.logout().subscribe(
      response => {
        console.log(response)
        // localStorage.clear();
        this.router.navigate(['/auth']);
      },
      errorResponse => {
        console.log(errorResponse)
      }
    );

    // this.authService.logout().pipe(
    //   finalize(() => {
    //     this.router.navigate(['/auth']);
    //     localStorage.clear();
    //   })
    // ).subscribe();
  }

}

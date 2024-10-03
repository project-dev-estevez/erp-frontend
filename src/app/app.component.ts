import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SpinnerService } from './shared/services/spinner.service';
import { NgxPermissionsService } from 'ngx-permissions';
import { AuthenticationService } from './authentication/services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  title = 'estevez-jor';

  constructor(
    private spinnerService: SpinnerService,
    private ngxPermissionsService: NgxPermissionsService,
    private authService: AuthenticationService
  )
  {}

  ngOnInit() {
    this.ngxPermissionsService.loadPermissions(
      ['ceo']
    );
  }

  get isActive(): BehaviorSubject<boolean> {
    return this.spinnerService.isLoading;
  }
}

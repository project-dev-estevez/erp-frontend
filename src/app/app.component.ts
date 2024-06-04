import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SpinnerService } from './shared/services/spinner.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  constructor(
    private spinnerService: SpinnerService
  )
  {}

  get isActive(): BehaviorSubject<boolean>{
    return this.spinnerService.isLoading;
  }

}

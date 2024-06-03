import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { SharedModule } from './shared/shared.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { SpinnerInterceptorService } from './shared/components/loading-spinner/spinner-interceptor.service';
import { provideCharts, withDefaultRegisterables } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: SpinnerInterceptorService, multi: true },
    provideAnimationsAsync(),
    provideCharts(withDefaultRegisterables())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

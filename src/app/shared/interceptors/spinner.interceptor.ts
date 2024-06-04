import { Injectable } from "@angular/core";

import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { finalize } from "rxjs/operators";
import { SpinnerService } from "../services/spinner.service";
import { Observable } from "rxjs";

@Injectable()
export class SpinnerInterceptor implements HttpInterceptor{

  constructor(
    private spinnerService: SpinnerService
  )
  {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    setTimeout(() => {
      this.spinnerService.show();
    });

    return next.handle(request).pipe(
      finalize(() => this.spinnerService.hide())
    );

  }

}
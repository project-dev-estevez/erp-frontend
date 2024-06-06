import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { catchError, switchMap, tap } from 'rxjs/operators';
import { AuthenticationService } from '../services/authentication.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private router: Router,
    private authService: AuthenticationService
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authToken = this.authService.getToken();

    const clonedRequest = req.clone({
      setHeaders: {
        'X-API-KEY': authToken,
        'Content-Type': 'application/json'
      }
    });

    console.log("token: ", authToken);
    return next.handle(clonedRequest);
  }
}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { LoginDataDto, LoginResponse } from '../interfaces/authentication.interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService 
{

  constructor(
    private http: HttpClient
  ) { }

  login(loginDataDto: LoginDataDto): Observable<LoginResponse> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.post<LoginResponse>(`${environment.apiUrl}/auth/login`, loginDataDto, httpOptions);
  }

  checkToken(){
    // TODO: Verificar la presencia del token para redirigir al /dashboard
  }

  setToken( token: string )
  {
    localStorage.setItem('X-API-KEY', token);
  }

  getToken(): string
  {
    return localStorage.getItem('X-API-KEY') || '';
  }

}

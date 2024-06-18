import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { LoginDataDto, LoginResponse, RegisterDataDto, RegisterResponse } from '../interfaces/authentication.interfaces';
import { Observable, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService 
{

  constructor(
    private http: HttpClient
  ) { }

  login(loginDataDto: LoginDataDto): Observable<LoginResponse> {

    return this.http.post<LoginResponse>(`${environment.apiUrl}/auth/login`, loginDataDto);
  }

  register(registerDataDto: RegisterDataDto){
    return this.http.post<RegisterResponse>(`${environment.apiUrl}/auth/register`, registerDataDto);
  }

  logout() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-API-KEY': this.getToken()
      })
    };

    return this.http.post(`${environment.apiUrl}/auth/logout`, {}, httpOptions);
  }

  checkToken(){
    const token = this.getToken();
    if(!token){
      return of(false);
    }

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-API-KEY': this.getToken()
      })
    };

    return this.http.get(`${environment.apiUrl}/auth/check-token/${token}`, httpOptions).pipe(
      map( auth => {
        if( auth )
        {
          return true;
        }

        return false;
      })
    );
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

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { CheckTokenData, LoginDataDto, LoginResponse } from '../interfaces/authentication.interfaces';
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

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.post<LoginResponse>(`${environment.apiUrl}/auth/login`, loginDataDto, httpOptions);
  }

  checkToken(){
    const token = this.getToken();
    if(!token){
      return of(false);
    }


    return this.http.get(`${environment.apiUrl}/auth/check-token/${token}`).pipe(
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

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { LoginDataDto } from '../interfaces/authentication.interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService 
{

  constructor(
    private http: HttpClient
  ) { }

  login(loginDataDto: LoginDataDto) {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.post(`${environment.apiUrl}/auth/login`, loginDataDto, httpOptions);
  }

}

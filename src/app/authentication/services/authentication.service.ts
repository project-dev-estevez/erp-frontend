import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { CheckTokenResponse, LoginDataDto, LoginResponse, RegisterDataDto, RegisterResponse, ForgotPasswordDataDto, ForgotPasswordResponse, ResetPasswordDataDto, ResetPasswordResponse } from '../interfaces/authentication.interfaces';
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

  forgotPassword(forgotDataDto: ForgotPasswordDataDto){
    return this.http.post<ForgotPasswordResponse>(`${environment.apiUrl}/auth/forgot-password`, forgotDataDto);
  }

  resetPassword(resetPasswordDataDto: ResetPasswordDataDto){
    return this.http.put<ResetPasswordResponse>(`${environment.apiUrl}/auth/reset-password`, resetPasswordDataDto);
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

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      })
    };

    return this.http.get<CheckTokenResponse>(`${environment.apiUrl}/auth/check-token`, httpOptions);
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

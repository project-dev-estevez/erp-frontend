import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetAllDirectorsResponse } from '../interfaces/request-response.interfaces';

@Injectable({
  providedIn: 'root'
})
export class DirectorsService {

  constructor(
    private http: HttpClient
  ) { }

  getAllDirectors(): Observable<GetAllDirectorsResponse> {
    return this.http.get<GetAllDirectorsResponse>('http://localhost:3000/directors');
  }
}

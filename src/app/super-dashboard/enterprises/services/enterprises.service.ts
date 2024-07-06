import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { GetAllEnterprisesResponse } from '../interfaces/request-response.interfaces';

@Injectable({
  providedIn: 'root'
})
export class EnterprisesService {

  constructor(
    private http: HttpClient
  ) { }

  getAllEnterprises(): Observable<GetAllEnterprisesResponse> {
    return this.http.get<GetAllEnterprisesResponse>(`${environment.apiUrl}/enterprises`);
  }
}

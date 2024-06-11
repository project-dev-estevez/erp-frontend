import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { ResponseGetAllEntries } from '../interfaces/warehouse.interfaces';
import { AuthenticationService } from 'src/app/authentication/services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class WarehouseService {

  constructor(
    private authService: AuthenticationService,
    private http: HttpClient
  ) { }

  getAllEntries( searchTerm: string ){

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-API-KEY': this.authService.getToken()
      }),
      params: new HttpParams().set('search_term', searchTerm)
    };

    return this.http.get<ResponseGetAllEntries>(`${environment.apiUrl}/warehouse/general-entries`, httpOptions);
  }

}

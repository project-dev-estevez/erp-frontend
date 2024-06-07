import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { ResponseGetAllEntries, WarehouseGeneralEntry } from '../interfaces/warehouse.interfaces';

@Injectable({
  providedIn: 'root'
})
export class WarehouseService {

  constructor(
    private http: HttpClient
  ) { }

  getAllEntries( searchTerm: string ){

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-API-KEY': '1929641598666337942f'
      }),
      params: new HttpParams().set('search_term', searchTerm)
    };

    return this.http.get<ResponseGetAllEntries>(`${environment.apiUrl}/warehouse/general-entries`, httpOptions);
  }

}

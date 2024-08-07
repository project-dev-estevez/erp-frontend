import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { GetAllCeosResponseDto } from '../interfaces/get-all-ceos-response.dto';
import { QueryGetAllCeosDto } from '../interfaces/query-get-all-ceos.dto';

@Injectable({
  providedIn: 'root'
})
export class CeosService {

  constructor(
    private http: HttpClient
  ) { }

  getAllCeos( queryGetAllCeosDto?: QueryGetAllCeosDto ): Observable<GetAllCeosResponseDto> {
    return this.http.get<GetAllCeosResponseDto>(`${environment.apiUrl}/ceos`);7
  }
}

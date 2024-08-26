import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { GetAllCeosResponseDto } from '../interfaces/get-all-ceos-response.dto';
import { QueryGetAllCeosDto } from '../interfaces/query-get-all-ceos.dto';
import { ResponseGetCeoByIdDto } from '../interfaces/get-ceo-by-id.dto';
import { CreateCeoDto } from '../interfaces/create-ceo.dto';
import { CreateCeoResponseDto } from '../interfaces/create-ceo-response.dto';
import { Ceo } from '../interfaces';
import { UpdateCeoDto } from '../interfaces/update-ceo.dto';

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

  getCeoById( id: string ): Observable<ResponseGetCeoByIdDto> {
    return this.http.get<ResponseGetCeoByIdDto>(`${environment.apiUrl}/ceos/${id}`);
  }

  createCeo( createCeoDto: CreateCeoDto ): Observable<CreateCeoResponseDto> {
    return this.http.post<CreateCeoResponseDto>(`${environment.apiUrl}/ceos`, createCeoDto);
  }

  updateCeoById( id: string, updateCeoDto: UpdateCeoDto ): Observable<Ceo> {
    return this.http.patch<Ceo>(`${environment.apiUrl}/ceos/${id}`, updateCeoDto );
  }

  deleteCeoById( id: string ): Observable<void> {
    return this.http.delete<void>(`${environment.apiUrl}/ceos/${id}`);
  }
}

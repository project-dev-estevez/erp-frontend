import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetAllDirectorsResponseDto, QueryGetAllDirectorsDto } from '../interfaces';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class DirectorsService {

  constructor(
    private http: HttpClient
  ) { }

  getAllDirectors( queryGetAllDirectorsDto?: QueryGetAllDirectorsDto ): Observable<GetAllDirectorsResponseDto> {
    return this.http.get<GetAllDirectorsResponseDto>(`${environment.apiUrl}/directors`);
  }
}

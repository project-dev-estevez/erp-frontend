import { HttpClient, HttpParams, HttpParamsOptions } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { QueryGetAllAreasDto } from '../interfaces/query-get-all-areas.dto';
import { GetAllAreasResponseDto } from '../interfaces/get-all-areas-response.dto';
import { Area, ResponseGetAreaByIdDto } from '../interfaces/get-area-by-id.dto';
import { CreateAreaDto } from '../interfaces/create-area.dto';
import { CreateAreaResponseDto } from '../interfaces/create-area-response.dt';
import { UpdateAreaDto } from '../interfaces/update-area.dto';
import { GetAllDepartmentsResponseDto } from '../../departments/interfaces/get-all-departments-response.dto';
import { PaginationDto } from '@shared/interfaces/pagination.dto';

@Injectable({
  providedIn: 'root'
})
export class AreasService {

  constructor(
    private http: HttpClient
  ) { }

  getAllAreas( paginationDto: PaginationDto ): Observable<GetAllAreasResponseDto> {

    const{ limit, offset } = paginationDto;

    const httpOptions = {
      params: new HttpParams().set('limit', limit ?? 8)
                              .set('offset', offset ?? 0)
    }
    
    return this.http.get<GetAllAreasResponseDto>(`${environment.apiUrl}/areas`, httpOptions);
  }

  getAllDepartments(): Observable<GetAllDepartmentsResponseDto> {
    return this.http.get<GetAllDepartmentsResponseDto>(`${environment.apiUrl}/departments`);
  }

  getAreaById( id: string ): Observable<ResponseGetAreaByIdDto> {
    return this.http.get<ResponseGetAreaByIdDto>(`${environment.apiUrl}/areas/${id}`);
  }

  createArea( createAreaDto: CreateAreaDto ): Observable<CreateAreaResponseDto> {
    return this.http.post<CreateAreaResponseDto>(`${environment.apiUrl}/areas`, createAreaDto);
  }

  updateAreaById( id: string, updateAreaDto: UpdateAreaDto ): Observable<Area> {
    return this.http.patch<Area>(`${environment.apiUrl}/areas/${id}`, updateAreaDto );
  }

  deleteAreaById( id: string ): Observable<void> {
    return this.http.delete<void>(`${environment.apiUrl}/areas/${id}`);
  }


}

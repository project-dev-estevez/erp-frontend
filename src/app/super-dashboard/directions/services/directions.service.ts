import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { catchError, map, Observable, of } from 'rxjs';
import { 
  CreateDirectionDto, CreateDirectionResponseDto,  
  GetAllDirectionsResponseDto, QueryGetAllDirectionsDto,
  Direction, UpdateDirectionDto, UpdateDirectionResponseDto  
} from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class DirectionsService {

  constructor(
    private http: HttpClient
  ) { }

  createDirection( createDirectionDto: CreateDirectionDto ): Observable<CreateDirectionResponseDto> {
    return this.http.post<CreateDirectionResponseDto>( `${environment.apiUrl}/directions`, createDirectionDto );
  }

  getAllDirections( queyGetAllDirectionsDto: QueryGetAllDirectionsDto ): Observable<GetAllDirectionsResponseDto> {
    return this.http.get<GetAllDirectionsResponseDto>(`${environment.apiUrl}/directions`);
  }

  getDirectionById( id: string ): Observable<Direction> {
    return this.http.get<Direction>(`${environment.apiUrl}/directions/${id}`);
  }

  updateDirectionById( id: string, updateDirectionDto: UpdateDirectionDto ): Observable<UpdateDirectionResponseDto> {
    return this.http.patch<UpdateDirectionResponseDto>( `${environment.apiUrl}/directions/${id}`, updateDirectionDto );
  }

  deleteDirectionById( id: string ): Observable<boolean> {
    return this.http.delete(`${environment.apiUrl}/directions/${id}`)
    .pipe(
      catchError( error => of(false)),
      map( () => true )
    );
  }
}

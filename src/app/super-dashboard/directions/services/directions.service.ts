import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Direction } from '../interfaces/direction.interface';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';
import { ResponseCreateDirection } from '../interfaces/request-response.interfaces';

@Injectable({
  providedIn: 'root'
})
export class DirectionsService {

  constructor(
    private http: HttpClient
  ) { }

  createDirection( direction: Direction ): Observable<ResponseCreateDirection> {
    return this.http.post<ResponseCreateDirection>(`${environment.apiUrl}/directions`, direction);
  }

  getAllDirections() {
    return this.http.get(`${environment.apiUrl}/directions`);
  }

  getDirectionById( id: string ): Observable<Direction> {
    return this.http.get<Direction>(`${environment.apiUrl}/directions/${id}`);
  }

  updateDirectionById( id: string, direction: Direction ) {
    return this.http.put(`${environment.apiUrl}/directions/${id}`, direction);
  }

  deleteDirectionById( id: string ) {
    return this.http.delete(`${environment.apiUrl}/directions/${id}`);
  }
}

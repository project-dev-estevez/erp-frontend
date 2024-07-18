import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreateDepartmentDto, CreateDepartmentResponseDto } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class DepartmentsService {

  constructor(
    private http: HttpClient
  ) { }


  createDeparment( createDepartmentDto: CreateDepartmentDto ): Observable<CreateDepartmentResponseDto> {
    return this.http.post<CreateDepartmentResponseDto>('http://localhost:3000/api/v1/departments', createDepartmentDto);
  }

}

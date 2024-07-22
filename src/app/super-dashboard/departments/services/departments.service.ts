import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreateDepartmentDto, CreateDepartmentResponseDto, Department } from '../interfaces';
import { environment } from 'src/environments/environment.development';
import { ResponseGetDeparmentByIdDto } from '../interfaces';
import { UpdateDepartmentDto } from '../interfaces/update-department.dto';

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

  updateDepartmentById( id: string, updateDepartmentDto: UpdateDepartmentDto ): Observable<Department> {
    return this.http.patch<Department>(`${environment.apiUrl}/departments/${id}`, updateDepartmentDto );
  }

  getDepartmentById( id: string ): Observable<ResponseGetDeparmentByIdDto> {
    return this.http.get<ResponseGetDeparmentByIdDto>(`${environment.apiUrl}/departments/${id}`);
  }

}

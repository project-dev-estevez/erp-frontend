import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreateDepartmentDto, CreateDepartmentResponseDto, Department } from '../interfaces';
import { environment } from 'src/environments/environment.development';
import { ResponseGetDeparmentByIdDto } from '../interfaces';
import { UpdateDepartmentDto } from '../interfaces/update-department.dto';
import { GetAllDepartmentsResponseDto } from '../interfaces/get-all-departments-response.dto';

@Injectable({
  providedIn: 'root'
})
export class DepartmentsService {

  constructor(
    private http: HttpClient
  ) { }

  getAllDepartments(): Observable<GetAllDepartmentsResponseDto> {
    return this.http.get<GetAllDepartmentsResponseDto>(`${environment.apiUrl}/departments`);
  }

  getDepartmentById( id: string ): Observable<ResponseGetDeparmentByIdDto> {
    return this.http.get<ResponseGetDeparmentByIdDto>(`${environment.apiUrl}/departments/${id}`);
  }

  createDeparment( createDepartmentDto: CreateDepartmentDto ): Observable<CreateDepartmentResponseDto> {
    return this.http.post<CreateDepartmentResponseDto>(`${environment.apiUrl}/departments`, createDepartmentDto);
  }

  updateDepartmentById( id: string, updateDepartmentDto: UpdateDepartmentDto ): Observable<Department> {
    return this.http.patch<Department>(`${environment.apiUrl}/departments/${id}`, updateDepartmentDto );
  }

  deleteDepartmentById( id: string ): Observable<void> {
    return this.http.delete<void>(`${environment.apiUrl}/departments/${id}`);
  }

}

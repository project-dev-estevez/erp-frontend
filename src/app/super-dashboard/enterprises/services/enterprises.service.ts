import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Enterprise, GetAllEnterprisesResponseDto, QueryGetAllEnterprisesDto } from '../interfaces';
import { CreateEnterpriseDto } from '../interfaces/create-enterprise.dto';
import { CreateEnterpriseResponseDto } from '../interfaces/create-enterprise-response.dto';
import { UpdateEnterpriseDto } from '../interfaces/update-enterprise.dto';
import { ResponseGetDeparmentByIdDto } from '../../departments/interfaces';
import { ResponseGetEnterpriseByIdDto } from '../interfaces/get-enterprise-by-id.dto';

@Injectable({
  providedIn: 'root'
})
export class EnterprisesService {

  constructor(
    private http: HttpClient
  ) { }

  getAllEnterprises( ): Observable<GetAllEnterprisesResponseDto> {
    return this.http.get<GetAllEnterprisesResponseDto>(`${environment.apiUrl}/enterprises`);
  }

  getEnterpriseById( id:string ): Observable<ResponseGetEnterpriseByIdDto>{
    return this.http.get<ResponseGetEnterpriseByIdDto>(`${environment.apiUrl}/enterprises/${ id }`);
  }

  createEnterprise( createEnterpriseDto: CreateEnterpriseDto ): Observable<CreateEnterpriseResponseDto> {
    return this.http.post<CreateEnterpriseResponseDto>(`${environment.apiUrl}/enterprises`, createEnterpriseDto);
  }

  updateEnterpriseById( id: string, updateEnterpriseDto: UpdateEnterpriseDto ): Observable<Enterprise> {
    return this.http.patch<Enterprise>(`${environment.apiUrl}/enterprises/${id}`, updateEnterpriseDto );
  }

  deleteEnterpriseById( id: string ): Observable<void> {
  return this.http.delete<void>(`${environment.apiUrl}/enterprises/${id}`);

}
}

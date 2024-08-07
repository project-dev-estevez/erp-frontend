import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { GetAllEnterprisesResponseDto, QueryGetAllEnterprisesDto } from '../interfaces';
import { CreateEnterpriseDto } from '../interfaces/create-enterprise.dto';
import { CreateEnterpriseResponseDto } from '../interfaces/create-enterprise-response.dto';

@Injectable({
  providedIn: 'root'
})
export class EnterprisesService {

  constructor(
    private http: HttpClient
  ) { }

  getAllEnterprises( queryGetAllEnterprisesDto?: QueryGetAllEnterprisesDto ): Observable<GetAllEnterprisesResponseDto> {
    return this.http.get<GetAllEnterprisesResponseDto>(`${environment.apiUrl}/enterprises`);
  }

  createEnterprise( createEnterpriseDto: CreateEnterpriseDto ): Observable<CreateEnterpriseResponseDto> {
    return this.http.post<CreateEnterpriseResponseDto>(`${environment.apiUrl}/enterprises`, createEnterpriseDto);
  }

}

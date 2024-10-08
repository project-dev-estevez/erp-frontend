import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Empoyees, GetAllEmpoyeesResponseDto } from "../interfaces";
import { CreateEmpoyeesDto } from '../interfaces/create-empoyees.dto';
import { CreateEmpoyeesResponseDto } from "../interfaces/create-empoyees-response.dto";
import { UpdateEmpoyeesDto } from "../interfaces/update-empoyees.dto";
import { ResponseGetEmpoyeesByIdDto } from '../interfaces/get-empoyees-by-id.dto';
import { PaginationDto } from '@shared/interfaces/pagination.dto';



@Injectable({
  providedIn: 'root'
})

export class EmpoyeesService {

  constructor(
    private http: HttpClient
  ) { }

  getAllEmpoyees( paginationDto: PaginationDto ): Observable<GetAllEmpoyeesResponseDto> {
    const { limit, offset } = paginationDto;

    const httpOptions = {
      params: new HttpParams().set('limit', limit ?? 8)
                              .set('offset', offset ?? 0)
    };

    return this.http.get<GetAllEmpoyeesResponseDto>(`${environment.apiUrl}/employees`, httpOptions);
  }

  getEmpoyeesById( id:string ): Observable<ResponseGetEmpoyeesByIdDto>{
    return this.http.get<ResponseGetEmpoyeesByIdDto>(`${environment.apiUrl}/employees/${ id }`);
  }

  createEmpoyees( createEmpoyeesDto: CreateEmpoyeesDto ): Observable<CreateEmpoyeesResponseDto> {
    return this.http.post<CreateEmpoyeesResponseDto>(`${environment.apiUrl}/employees`, createEmpoyeesDto);
  }

  updateEmpoyeesById( id: string, updateEmpoyeesDto: UpdateEmpoyeesDto ): Observable<Empoyees> {
    return this.http.patch<Empoyees>(`${environment.apiUrl}/employees/${id}`, updateEmpoyeesDto );
  }

  deleteEmpoyeesById( id: string ): Observable<void> {
  return this.http.delete<void>(`${environment.apiUrl}/employees/${id}`);

}
}

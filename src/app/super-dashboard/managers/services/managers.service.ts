import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Manager, GetAllManagersResponseDto,QueryGetAllManagersDto } from "../interfaces";
import { CreateManagerDto } from '../interfaces/create-manager.dto';
import { CreateManagerResponseDto } from "../interfaces/create-manager-response.dto";
import { UpdateManagerDto } from "../interfaces/update-manager.dto";
import { ResponseGetManagerByIdDto } from '../interfaces/get-manager-by-id.dto';

@Injectable({
  providedIn: 'root'
})

export class ManagersService {

  constructor(
    private http: HttpClient
  ) { }

  getAllManagers( ): Observable<GetAllManagersResponseDto> {
    return this.http.get<GetAllManagersResponseDto>(`${environment.apiUrl}/managers`);
  }

  getManagerById( id:string ): Observable<ResponseGetManagerByIdDto>{
    return this.http.get<ResponseGetManagerByIdDto>(`${environment.apiUrl}/managers/${ id }`);
  }

  createManager( createManagerDto: CreateManagerDto ): Observable<CreateManagerResponseDto> {
    return this.http.post<CreateManagerResponseDto>(`${environment.apiUrl}/managers`, createManagerDto);
  }

  updateManagerById( id: string, updateManagerDto: UpdateManagerDto ): Observable<Manager> {
    return this.http.patch<Manager>(`${environment.apiUrl}/managers/${id}`, updateManagerDto );
  }

  deleteManagerById( id: string ): Observable<void> {
  return this.http.delete<void>(`${environment.apiUrl}/managers/${id}`);

}
}

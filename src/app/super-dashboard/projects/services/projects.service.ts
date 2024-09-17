import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { QueryGetAllProjectsDto } from '../interfaces/query-get-all-projects.dto';
import { Observable } from 'rxjs';
import { GetAllProjectsResponseDto } from '../interfaces/get-all-projects-response.dto';
import { environment } from 'src/environments/environment.development';
import { CreateProjectDto } from '../interfaces/create-project.dto';
import { Project, ResponseGetProjectByIdDto } from '../interfaces/get-project-by-id.dto';
import { CreateProjectResponseDto } from '../interfaces/create-project-response.dto';
import { UpdateProjectDto } from '../interfaces/update-project.dto';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(
    private http: HttpClient
  ) { }

  getAllProjects( queryGetAllProjectsDto?: QueryGetAllProjectsDto ): Observable<GetAllProjectsResponseDto> {
    return this.http.get<GetAllProjectsResponseDto>(`${environment.apiUrl}/projects`);
  }

  getProjectById( id: string ): Observable<ResponseGetProjectByIdDto> {
    return this.http.get<ResponseGetProjectByIdDto>(`${environment.apiUrl}/projects/${id}`);
  }

  createProject( createProjectDto: CreateProjectDto ): Observable<CreateProjectResponseDto> {
    return this.http.post<CreateProjectResponseDto>(`${environment.apiUrl}/projects`, createProjectDto);
  }

  updateProjectById( id: string, updateProjectDto: UpdateProjectDto ): Observable<Project> {
    return this.http.patch<Project>(`${environment.apiUrl}/projects/${id}`, updateProjectDto );
  }

  deleteProjectById( id: string ): Observable<void> {
    return this.http.delete<void>(`${environment.apiUrl}/projects/${id}`);
  }
}

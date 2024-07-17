import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DepartmentsService {

  constructor(
    private http: HttpClient
  ) { }


  createDeparment() {
    return this.http.post('http://localhost:3000/api/v1/departments', {});
  }

}

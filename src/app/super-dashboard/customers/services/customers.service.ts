import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { QueryGetAllCustomersDto } from '../interfaces/query-get-all-customers.dto';
import { Observable } from 'rxjs';
import { GetAllCustomersResponseDto } from '../interfaces/get-all-customers-response.dto';
import { environment } from 'src/environments/environment.development';
import { Customer, ResponseGetCustomerByIdDto } from '../interfaces/get-customer-by-id.dto';
import { CreateCustomerDto } from '../interfaces/create-customer.dto';
import { CreateCustomerResponseDto } from '../interfaces/create-customer-response.dto';
import { UpdateCustomerDto } from '../interfaces/update-customer.dto';
import { PaginationDto } from '@shared/interfaces/pagination.dto';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  constructor(
    private http: HttpClient
  ) { }

  getAllCustomers( paginationDto: PaginationDto ): Observable<GetAllCustomersResponseDto> {

    const { limit, offset } = paginationDto;

    const httpOptions = {
      params: new HttpParams().set('limit', limit ?? 8)
                              .set('offset', offset ?? 0)
    };

    return this.http.get<GetAllCustomersResponseDto>(`${environment.apiUrl}/customers`, httpOptions);
  }

  getCustomerById( id: string ): Observable<ResponseGetCustomerByIdDto> {
    return this.http.get<ResponseGetCustomerByIdDto>(`${environment.apiUrl}/customers/${id}`);
  }

  createCustomer( createCustomerDto: CreateCustomerDto ): Observable<CreateCustomerResponseDto> {
    return this.http.post<CreateCustomerResponseDto>(`${environment.apiUrl}/customers`, createCustomerDto);
  }

  updateCustomerById( id: string, updateCustomerDto: UpdateCustomerDto ): Observable<Customer> {
    return this.http.patch<Customer>(`${environment.apiUrl}/customers/${id}`, updateCustomerDto );
  }

  deleteCustomerById( id: string ): Observable<void> {
    return this.http.delete<void>(`${environment.apiUrl}/customers/${id}`);
  }
}

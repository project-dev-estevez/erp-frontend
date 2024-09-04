import { Customer } from './customer-entity';

export interface GetAllCustomersResponseDto {
    results: Customer[];
    total:   number;
}
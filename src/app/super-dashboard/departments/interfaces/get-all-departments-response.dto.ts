import { Department } from "./department-entity";

export interface GetAllDepartmentsResponseDto {
    results: Department[];
    total:   number;
}

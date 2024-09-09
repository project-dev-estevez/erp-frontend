import { Empoyees } from "./empoyees-entity";

export interface GetAllEmpoyeesResponseDto {
  results: Empoyees[];
  total: number;
}

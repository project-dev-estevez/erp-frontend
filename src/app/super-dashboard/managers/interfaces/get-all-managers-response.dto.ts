import { Manager } from "./manager-entity";

export interface GetAllManagersResponseDto {
  results: Manager[];
  total: number;
}

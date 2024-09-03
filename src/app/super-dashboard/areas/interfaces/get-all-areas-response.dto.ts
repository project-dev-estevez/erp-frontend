import { Area } from "./area-entity";

export interface GetAllAreasResponseDto {
    results: Area[];
    total:   number;
}
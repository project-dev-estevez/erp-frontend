import { Direction } from "./direction-entity";

export interface GetAllDirectionsResponseDto {
    results: Direction[];
    total:   number;
}

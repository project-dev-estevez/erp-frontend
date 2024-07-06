import { Director } from "./director-entity";

export interface GetAllDirectorsResponseDto {
    results: Director[];
    total:   number;
}
import { Ceo } from "./ceo-entity";

export interface GetAllCeosResponseDto {

  results: Ceo[];
    total:   number;
}

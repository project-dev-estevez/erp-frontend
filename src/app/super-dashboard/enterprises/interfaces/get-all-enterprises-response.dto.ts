import { Enterprise } from "./enterprise-entity";

export interface GetAllEnterprisesResponseDto {
    results: Enterprise[];
    total:   number;
}
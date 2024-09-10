import { Project } from "./project-entity";

export interface GetAllProjectsResponseDto {
    results: Project[];
    total:   number;
}
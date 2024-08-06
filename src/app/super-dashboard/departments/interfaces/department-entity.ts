import { Direction } from "../../directions/interfaces";

export interface Department {
    id:        string;
    name:      string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
}
export interface ResponseGetDeparmentByIdDto {
    id:        string;
    name:      string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
    direction: Direction;
    manager:   null;
}

interface Direction {
    id:                 string;
    name:               string;
    isGeneralDirection: boolean;
    state:              boolean;
    createdAt:          Date;
    updatedAt:          Date;
    deletedAt:          Date | null;
}
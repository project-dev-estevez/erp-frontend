export interface CreateDepartmentResponseDto {
    name:      string;
    manager:   null;
    direction: Direction;
    id:        string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
}

interface Direction {
    id: string;
}
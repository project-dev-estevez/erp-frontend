export interface CreateAreaResponseDto {
    name: string;
    coordinatorId: string;
    leaderId: string;
    departmentId: string[];
}

interface Area {
    name: string;
    coordinatorId: string;
    leaderId: string;
    departmentId: string[];
}
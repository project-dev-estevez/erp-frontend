export interface ResponseGetAreaByIdDto {
    id: string;
    name: string;
    coordinatorId: string;
    leaderId: string;
    departmentId: string;
    department: Department;
}

export interface Area{
    id: string;
    name: string;
    coordinatorId: string;
    leaderId: string;
    departmentId: string;
}

export interface Department {
    id: string;
    name: string;
}

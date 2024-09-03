export interface ResponseGetAreaByIdDto {
    name: string;
    coordinatorId: string;
    leaderId: string;
    departmentId: string;
    department: Department;
}

export interface Area{
    name: string;
    coordinatorId: string;
    leaderId: string;
    departmentId: string;
}

export interface Department {
    id: string;
    name: string;
}
export interface ResponseGetProjectByIdDto {
    id: string;
    name: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
    customerId: string;
    customer: Customer;
    enterpriseId: string;
    enterprise: Enterprise;
}

export interface Project{
    id: string;
    name: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
}

export interface Customer{
    id: string;
    name: string;
}

export interface Enterprise{
    id: string;
    name: string;
}
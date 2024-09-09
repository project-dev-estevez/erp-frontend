export interface ResponseGetCustomerByIdDto {
    id: string;
    name: string;
    rfc: string;
    email: string;
    phoneNumber: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
}

export interface Customer{
    id: string;
    name: string;
    rfc: string;
    email: string;
    phoneNumber: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
}
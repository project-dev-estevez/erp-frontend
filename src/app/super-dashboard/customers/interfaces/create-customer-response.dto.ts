export interface CreateCustomerResponseDto {
    id: string;
    name: string;
    rfc: string;
    email: string;
    phoneNumber: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
}

interface Customer {
    id: string;
    name: string;
    rfc: string;
    email: string;
    phoneNumber: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
}
export interface QueryGetAllCustomersDto {
    // Paginación
    pagination: {
        limit: number;
        offset: number;
    }
}
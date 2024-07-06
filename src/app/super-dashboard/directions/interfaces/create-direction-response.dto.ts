export interface CreateDirectionResponseDto {
    id: string;
    state: boolean;
    name: string;
    isGeneralDirection: boolean;
    enterprise: Enterprise;
    director: Director;
    createdAt: Date;
    updatedAt: Date;
}

interface Enterprise {
    id: string;
}

interface Director {
    id: string;
}
export interface Enterprise {
    id: string;
}

export interface Director {
    id: string;
}

export interface ResponseCreateDirection {
    id: string;
    state: boolean;
    name: string;
    isGeneralDirection: boolean;
    enterprise: Enterprise;
    director: Director;
    createdAt: Date;
    updatedAt: Date;
}
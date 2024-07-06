export interface GetAllEnterprisesResponse {
    results: Enterprise[];
    total:   number;
}

export interface Enterprise {
    id:        string;
    name:      string;
    state:     boolean;
    createdAt: Date;
    updatedAt: Date;
    ceo:       Ceo;
}

export interface Ceo {
    id:        string;
    email:     string;
    password:  string;
    fullName:  string;
    isActive:  boolean;
    roles:     string[];
    createdAt: Date;
    updatedAt: Date;
}

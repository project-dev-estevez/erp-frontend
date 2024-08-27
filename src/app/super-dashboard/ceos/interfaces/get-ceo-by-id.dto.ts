export interface ResponseGetCeoByIdDto {
    id:        string;
    email:     string;
    password:  string;
    fullName:  string;
    roles:     string[];
    state:     boolean;
    createdAt: Date;
    updatedAt: Date;
}

export interface Ceo{
    id:        string;
    email:     string;
    password:  string;
    fullName:  string;
    roles:     string[];
    state:     boolean;
    createdAt: Date;
    updatedAt: Date;
}
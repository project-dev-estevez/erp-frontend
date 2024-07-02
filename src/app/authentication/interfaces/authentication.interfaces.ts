export interface LoginDataDto{
    username: string;
    password: string;
}

export interface LoginResponse{
    id: string;
    email: string;
    roles: string[];
    token: string;
}

export interface User {
    estatus: string;
    id: string;
    nombre: string;
    username: string;
}

export interface CheckTokenData{
    status: boolean;
    message: string;
    token: string;
}

export interface RegisterDataDto{
    email: string;
    password: string;
    fullName: string;
}

export interface RegisterResponse{
    email: string;
    fullName: string;
    id: string;
    isActive: boolean;
    roles: string[];
    token: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface CheckTokenResponse {
    id:        string;
    email:     string;
    password:  string;
    fullName:  string;
    isActive:  boolean;
    roles:     string[];
    createdAt: Date;
    updatedAt: Date;
    token:     string;
}
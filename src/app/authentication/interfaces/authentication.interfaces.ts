export interface LoginDataDto{
    username: string;
    password: string;
}

export interface LoginResponse{
    status: boolean;
    message: string;
    data: User;
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
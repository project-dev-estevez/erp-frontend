export interface Direction {
    id:                 string;
    name:               string;
    isGeneralDirection: boolean;
    state:              boolean;
    createdAt:          Date;
    updatedAt:          Date;
    enterprise:         Enterprise;
    director:           Director;
    direction:          Direction;
}

interface Director {
    id:        string;
    email:     string;
    password:  string;
    fullName:  string;
    roles:     string[];
    state:     boolean;
    createdAt: Date;
    updatedAt: Date;
}

interface Enterprise {
    id:        string;
    name:      string;
    state:     boolean;
    createdAt: Date;
    updatedAt: Date;
}
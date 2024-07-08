export interface Enterprise {
    id:        string;
    name:      string;
    state:     boolean;
    createdAt: Date;
    updatedAt: Date;
    ceo:       Ceo;
}

interface Ceo {
    id:        string;
    email:     string;
    password:  string;
    fullName:  string;
    isActive:  boolean;
    roles:     string[];
    createdAt: Date;
    updatedAt: Date;
}
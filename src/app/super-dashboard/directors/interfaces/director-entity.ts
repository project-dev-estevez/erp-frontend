export interface Director {
    id:        string;
    email:     string;
    password:  string;
    fullName:  string;
    roles:     string[];
    state:     boolean;
    createdAt: Date;
    updatedAt: Date;
}
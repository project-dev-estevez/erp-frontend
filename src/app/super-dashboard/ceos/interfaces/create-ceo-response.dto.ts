export interface CreateCeoResponseDto {
    id:        string;
    email:     string;
    /*password:  string;*/
    fullName:  string;
    roles:     string[];
    state:     boolean;
    createdAt: Date;
    updatedAt: Date;
}

interface Ceo {
    id:        string;
    email:     string;
    /*password:  string;*/
    fullName:  string;
    roles:     string[];
    state:     boolean;
    createdAt: Date;
    updatedAt: Date;
}
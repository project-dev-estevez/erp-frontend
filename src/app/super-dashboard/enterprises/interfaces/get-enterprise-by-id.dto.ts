export interface ResponseGetEnterpriseByIdDto {
  id: string;
  name: string;
  createdAt: Date;
  updateAt: Date;
  deletedAt: Date;
  ceo: Ceo;
}

interface Ceo {
  id: string;
  fullName: string;
}

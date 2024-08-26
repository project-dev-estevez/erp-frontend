export interface ResponseGetEnterpriseByIdDto {
  id: string;
  name: string;
  createdAt: Date;
  updateAt: Date;
  deletedAt: Date;
  ceo: Ceo;
  address:string;
  phoneNumber: string;
  rfc: string;
}

interface Ceo {
  id: string;
  fullName: string;
}

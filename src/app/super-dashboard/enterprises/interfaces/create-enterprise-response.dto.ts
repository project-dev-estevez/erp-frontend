export interface CreateEnterpriseResponseDto {
  name:      string;
  ceo: Ceo;
  id:        string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
  address: string;

}

interface Ceo {
  id: string;
}

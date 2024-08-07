export interface CreateEnterpriseResponseDto {
  name:      string;
  ceo: Ceo;
  id:        string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}

interface Ceo {
  id: string;
}

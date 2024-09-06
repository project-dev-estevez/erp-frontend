export interface ResponseGetEmpoyeesByIdDto{
  id: string;
  name: string;
  position: string;
  createdAt: Date;
  updateAt: Date;
  deletedAt: Date;
  areaId: string;
  area: Area;
}

interface Area{
id: string;
name: string;
}

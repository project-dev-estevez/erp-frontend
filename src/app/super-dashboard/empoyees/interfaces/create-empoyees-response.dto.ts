export interface CreateEmpoyeesResponseDto{
  id: string;
  name: string;
  position: string;
  areaId: string;
  areas : Area;
}

interface Area{
  id: string;
  name: string;
}

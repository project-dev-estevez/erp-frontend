export interface Manager{
  id: string;
  name: string;
  email: string;
  manager: Manager;
}

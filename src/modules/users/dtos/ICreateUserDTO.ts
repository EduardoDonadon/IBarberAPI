export interface ICreateUserDTO {
  name: string;
  email: string;
  cpf: number;
  password: string;
  barber?: boolean;
}
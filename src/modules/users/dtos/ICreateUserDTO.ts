import { Address } from "../infra/typeorm/entities/Address";
export interface ICreateUserDTO {
  name: string;
  email: string;
  cpf: number;
  password: string;
  barber?: boolean;
  address: Address;
}
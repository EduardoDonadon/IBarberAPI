import { ICreateUserDTO } from '@modules/users/dtos/ICreateUserDTO';
import { User } from '@modules/users/infra/typeorm/entities/User';

export interface IUsersRepository {
  create(data: ICreateUserDTO): Promise<User>;
  findAll(): Promise<User[]>;
  findByEmail(email: string): Promise<User | undefined>;
  findByCpf(cpf: number): Promise<User | undefined>;
}
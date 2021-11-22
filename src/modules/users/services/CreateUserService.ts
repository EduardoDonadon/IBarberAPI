import { injectable, inject } from 'tsyringe';
import { hash } from 'bcryptjs';

import { IUsersRepository } from '@modules/users/iRepositories/IUsersRepository';

interface IResquest {
  name: string;
  email: string;
  cpf: number;
  password: string;
  barber?: boolean;
}

@injectable()
export class CreateUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository
  ) {}

  async execute({name, email, cpf, password, barber}: IResquest) {
    const cpfInUse = await this.usersRepository.findByCpf(cpf);

    if (cpfInUse) {
      throw new Error('CPF already used.');
    }

    const emailInUse = await this.usersRepository.findByEmail(email);

    if (emailInUse) {
      throw new Error('Email already used.');
    }

    const passwordHashed = await hash(password, 8);

    let barberFormatted = false;

    if (barber) {
      barberFormatted = true;
    }

    const user = await this.usersRepository.create({
      name,
      email,
      cpf,
      password: passwordHashed,
      barber: barberFormatted
  })
    
    return user;
  }
}
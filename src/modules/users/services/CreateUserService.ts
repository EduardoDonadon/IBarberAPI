import { injectable, inject } from 'tsyringe';
import { hash } from 'bcryptjs';

import { IUsersRepository } from '@modules/users/iRepositories/IUsersRepository';
import { IAddressesRepository } from '../iRepositories/IAddressesRepository';

interface IResquest {
  name: string;
  email: string;
  cpf: string;
  password: string;
  barber?: boolean;
  address: {
    cep: string;
    street: string;
    number: string;
    neighborhood: string;
    complement: string;
    state: string;
    city: string;
  };
}

@injectable()
export class CreateUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
    @inject('AddressesRepository')
    private addressesRepository: IAddressesRepository
  ) {}

  async execute({name, email, cpf, password, barber, address}: IResquest) {
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

    const adrs = await this.addressesRepository.create(address);

    const user = await this.usersRepository.create({
      name,
      email,
      cpf,
      password: passwordHashed,
      barber: barberFormatted,
      address: adrs
  })
    
    return user;
  }
}
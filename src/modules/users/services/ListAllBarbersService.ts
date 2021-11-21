import { injectable, inject } from 'tsyringe';

import { IUsersRepository } from '@modules/users/iRepositories/IUsersRepository';

@injectable()
export class ListAllBarbersService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository
  ) {}

  async execute() {
    const barbers = this.usersRepository.findBarbers();
    
    return barbers;
  }
}
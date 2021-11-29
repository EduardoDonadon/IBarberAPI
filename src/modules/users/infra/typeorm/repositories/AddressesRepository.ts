
  
import { getRepository, Repository } from 'typeorm';

import { IAddressesRepository } from '@modules/users/iRepositories/IAddressesRepository';
import { ICreateAddressDTO } from '@modules/users/dtos/ICreateAddressDTO';

import { Address } from '../entities/Address';

export class AddressesRepository implements IAddressesRepository {
  private ormRepository: Repository<Address>;

  constructor() {
    this.ormRepository = getRepository(Address);
  }

  public async create(AddressData: ICreateAddressDTO): Promise<Address> {
    const address = this.ormRepository.create(AddressData);

    await this.ormRepository.save(address);

    return address;
  }
}
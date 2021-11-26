import { getRepository, Repository } from 'typeorm';

import { ICutsRepository } from '@modules/cuts/iRepositories/ICutsRepository';
import { ICreateCutDTO } from '@modules/cuts/dtos/ICreateCutDTO';

import { Cut } from '../entities/Cut';

class CutsRepository implements ICutsRepository {
  private ormRepository: Repository<Cut>;

  constructor() {
    this.ormRepository = getRepository(Cut);
  }
  
  public async findByBarberId(barber_id: string): Promise<Cut[]> {
    const cuts = await this.ormRepository.find({ where: { barber_id } });

    return cuts;
  }

  public async findAll(): Promise<Cut[]> {
    const cuts = await this.ormRepository.find();

    return cuts;
  }

  public async create(cutData: ICreateCutDTO): Promise<Cut> {
    const cut = this.ormRepository.create(cutData);

    await this.ormRepository.save(cut);

    return cut;
  }
}

export { CutsRepository };
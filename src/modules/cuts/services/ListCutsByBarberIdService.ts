import { injectable, inject } from 'tsyringe';

import { ICutsRepository } from '@modules/cuts/iRepositories/ICutsRepository';

@injectable()
export class ListCutsByBarberIdService {
  constructor(
    @inject('CutsRepository')
    private cutsRepository: ICutsRepository
  ) {}

  async execute(barber_id: string) {
    const cuts = await this.cutsRepository.findByBarberId(barber_id);
    
    return cuts;
  }
}
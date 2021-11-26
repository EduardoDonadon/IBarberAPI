import { injectable, inject } from 'tsyringe';

import { ICutsRepository } from '@modules/cuts/iRepositories/ICutsRepository';

interface IResquest {
  barber_id: string;
  cut_photo: string;
}

@injectable()
export class CreateCutService {
  constructor(
    @inject('CutsRepository')
    private cutsRepository: ICutsRepository
  ) {}

  async execute({barber_id, cut_photo}: IResquest) {
    const cut = await this.cutsRepository.create({
      barber_id,
      cut_photo
    })
    
    return cut;
  }
}
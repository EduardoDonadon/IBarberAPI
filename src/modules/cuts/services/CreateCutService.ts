import { injectable, inject } from 'tsyringe';

import IStorageProvider from '@shared/providers/StorageProvider/models/IStorageProvider';
import { ICutsRepository } from '@modules/cuts/iRepositories/ICutsRepository';

interface IResquest {
  barber_id: string;
  cut_photo: string;
}

@injectable()
export class CreateCutService {
  constructor(
    @inject('CutsRepository')
    private cutsRepository: ICutsRepository,

    @inject('StorageProvider')
    private storageProvider: IStorageProvider,
  ) {}

  async execute({barber_id, cut_photo}: IResquest) {
    const fileName = await this.storageProvider.saveFile(cut_photo);

    const cut = await this.cutsRepository.create({
      barber_id,
      cut_photo: fileName
    })
    
    return cut;
  }
}
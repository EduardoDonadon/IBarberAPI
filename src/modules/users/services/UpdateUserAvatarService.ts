import { injectable, inject } from 'tsyringe';

import IStorageProvider from '@shared/providers/StorageProvider/models/IStorageProvider';
import { IUsersRepository } from '@modules/users/iRepositories/IUsersRepository';
import { User } from '@modules/users/infra/typeorm/entities/User';

interface IRequest {
  user_id: string;
  avatarFileName: string;
}

@injectable()
export class UpdateUserAvatarService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,

    @inject('StorageProvider')
    private storageProvider: IStorageProvider,
  ) {}

  public async execute({ user_id, avatarFileName }: IRequest): Promise<User> {
    const user = await this.usersRepository.findById(user_id);

    if (!user) {
      throw new Error('Only authenticated users can change avatar.');
    }

    if (user.avatar) {
      await this.storageProvider.deleteFile(user.avatar);
    }

    const filename = await this.storageProvider.saveFile(avatarFileName);

    user.avatar = filename;

    await this.usersRepository.save(user);

    return user;
  }
}

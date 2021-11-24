import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { instanceToInstance } from 'class-transformer';

import { UpdateUserAvatarService } from '@modules/users/services/UpdateUserAvatarService';

export class UpdateUserAvatarController {
  async handle(request: Request, response: Response) {
    const updateUserAvatarService = container.resolve(UpdateUserAvatarService);
    
    const user = await updateUserAvatarService.execute({
      user_id: request.user.id,
      avatarFileName: request.file.filename,
    });

    return response.json(instanceToInstance(user));
  }
}
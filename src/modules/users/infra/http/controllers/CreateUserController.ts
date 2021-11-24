import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { instanceToInstance } from 'class-transformer';

import { CreateUserService } from '@modules/users/services/CreateUserService';

export class CreateUserController {
  async handle(request: Request, response: Response) {
    const { name, email, cpf, password, barber } = request.body;

    const createUserService = container.resolve(CreateUserService);

    const user = await createUserService.execute({ name, email, cpf, password, barber });

    return response.json(instanceToInstance(user));
  }
}
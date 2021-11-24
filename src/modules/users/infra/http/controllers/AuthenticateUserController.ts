import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { instanceToInstance } from 'class-transformer';

import { AuthenticateUserService } from '@modules/users/services/AuthenticateUserService';

export class AuthenticateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    const authenticateUser = container.resolve(AuthenticateUserService);

    const { user, token } = await authenticateUser.execute({ email, password });

    return response.json({ user: instanceToInstance(user), token });
  }
}
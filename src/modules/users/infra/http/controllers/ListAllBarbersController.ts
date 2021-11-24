
import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { instanceToInstance } from 'class-transformer';

import { ListAllBarbersService } from '@modules/users/services/ListAllBarbersService';

export class ListAllBarbersController {
  async handle(request: Request, response: Response) {
    const listAllBarbersService = container.resolve(ListAllBarbersService);
    
    const barbers = await listAllBarbersService.execute();

    return response.json(instanceToInstance(barbers));
  }
}
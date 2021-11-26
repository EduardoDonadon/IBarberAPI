import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { instanceToInstance } from 'class-transformer';

import { CreateCutService } from '@modules/cuts/services/CreateCutService';

export class CreateCutController {
  async handle(request: Request, response: Response) {
    const { id: barber_id } = request.user;

    const createCutService = container.resolve(CreateCutService);
    
    const cut = await createCutService.execute({
      barber_id,
      cut_photo: request.file.filename,
    });

    return response.json(instanceToInstance(cut));
  }
}
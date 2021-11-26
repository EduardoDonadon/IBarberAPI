import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ListCutsByBarberIdService } from '@modules/cuts/services/ListCutsByBarberIdService';

export class ListCutsByBarberIdController {
  async handle(request: Request, response: Response) {
    const { barber_id } = request.params;
    
    const listCutsByBarberIdService = container.resolve(ListCutsByBarberIdService);
    
    const cuts = await listCutsByBarberIdService.execute(barber_id);

    return response.json(cuts);
  }
}
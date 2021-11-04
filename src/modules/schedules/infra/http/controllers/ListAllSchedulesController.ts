
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ListAllSchedulesService } from '@modules/schedules/services/ListAllSchedulesService';

export class ListAllSchedulesController {
  async handle(request: Request, response: Response) {
    const listAllSchedulesService = container.resolve(ListAllSchedulesService);
    
    const schedules = await listAllSchedulesService.execute();

    return response.json(schedules);
  }
}
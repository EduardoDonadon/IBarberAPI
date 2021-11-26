import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ListSchedulesByBarberService } from '@modules/schedules/services/ListSchedulesByBarberService';

export class ListSchedulesByBarberController {
  async handle(request: Request, response: Response) {
    const { barber_id } = request.params;
    
    const listSchedulesByBarberService = container.resolve(ListSchedulesByBarberService);
    
    const schedules = await listSchedulesByBarberService.execute(barber_id);

    return response.json(schedules);
  }
}
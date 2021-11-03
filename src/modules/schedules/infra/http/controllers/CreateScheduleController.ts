import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateScheduleService } from '@modules/schedules/services/CreateScheduleService';

export class CreateScheduleController {
  async handle(request: Request, response: Response) {
    const { barber_id, date } = request.body;

    const createScheduleService = container.resolve(CreateScheduleService);
    
    const schedule = await createScheduleService.execute({ barber_id, date });

    return response.json(schedule);
  }
}
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateAppointmentService } from '@modules/appointments/services/CreateAppointmentService';

export class CreateAppointmentController {
  async handle(request: Request, response: Response) {
    const { schedule_id, client_id } = request.body;

    const createAppointmentService = container.resolve(CreateAppointmentService);
    
    const appointment = await createAppointmentService.execute({ schedule_id, client_id });

    return response.json(appointment);
  }
}
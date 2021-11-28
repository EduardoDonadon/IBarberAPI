
import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { instanceToInstance } from 'class-transformer';

import { ListAppointmentsByClientId } from '@modules/appointments/services/ListAppointmentsByClientId';

export class ListAppointmentsByClientIdController {
  async handle(request: Request, response: Response) {
    const { client_id } = request.params;
    
    const listAppointmentsByClientId = container.resolve(ListAppointmentsByClientId);
    
    const appointments = await listAppointmentsByClientId.execute(client_id);

    return response.json(instanceToInstance(appointments));
  }
}
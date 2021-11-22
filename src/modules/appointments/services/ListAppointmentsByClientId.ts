import { injectable, inject } from 'tsyringe';

import { IAppointmentsRepository } from '@modules/appointments/iRepositories/IAppointmentsRepository';

@injectable()
export class ListAppointmentsByClientId {
  constructor(
    @inject('AppointmentsRepository')
    private appointmentsRepository: IAppointmentsRepository,
  ) {}

  async execute(client_id: string) {
    const appointments = await this.appointmentsRepository.findByClientId(client_id);
    
    return appointments;
  }
}
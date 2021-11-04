import { injectable, inject } from 'tsyringe';

import { IAppointmentsRepository } from '@modules/appointments/iRepositories/IAppointmentsRepository';

interface IResquest {
  client_id: string;
  schedule_id: string;
}

@injectable()
export class CreateAppointmentService {
  constructor(
    @inject('AppointmentsRepository')
    private appointmentsRepository: IAppointmentsRepository
  ) {}

  async execute({client_id, schedule_id}: IResquest) {
    

    const appointment = this.appointmentsRepository.create({
      client_id,
      schedule_id
    })
    
    return appointment;
  }
}
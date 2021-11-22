import { injectable, inject } from 'tsyringe';

import { IAppointmentsRepository } from '@modules/appointments/iRepositories/IAppointmentsRepository';
import { ISchedulesRepository } from '@modules/schedules/iRepositories/ISchedulesRepository';

interface IResquest {
  client_id: string;
  schedule_id: string;
}

@injectable()
export class CreateAppointmentService {
  constructor(
    @inject('AppointmentsRepository')
    private appointmentsRepository: IAppointmentsRepository,
    @inject('SchedulesRepository')
    private schedulesRepository: ISchedulesRepository
  ) {}

  async execute({client_id, schedule_id}: IResquest) {
    const schedule = await this.schedulesRepository.findById(schedule_id);

    if(!schedule) {
      throw new Error('Schedule not found');
    }

    schedule.available = false;

    await this.schedulesRepository.save(schedule);

    const appointment = await this.appointmentsRepository.create({
      client_id,
      schedule_id
    })
    
    return appointment;
  }
}
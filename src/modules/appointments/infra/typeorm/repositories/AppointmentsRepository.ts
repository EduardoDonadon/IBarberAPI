import { getRepository, Repository } from 'typeorm';

import { IAppointmentsRepository } from '@modules/appointments/iRepositories/IAppointmentsRepository';
import { ICreateAppointmentDTO } from '@modules/appointments/dtos/ICreateAppointmentDTO';

import { Appointment } from '../entities/Appointment';

class AppointmentsRepository implements IAppointmentsRepository {
  private ormRepository: Repository<Appointment>;

  constructor() {
    this.ormRepository = getRepository(Appointment);
  }

  public async create(appointmentData: ICreateAppointmentDTO): Promise<Appointment> {
    const appointment = this.ormRepository.create(appointmentData);

    await this.ormRepository.save(appointment);

    return appointment;
  }
}

export { AppointmentsRepository };
import { getRepository, Repository } from 'typeorm';

import { IAppointmentsRepository } from '@modules/appointments/iRepositories/IAppointmentsRepository';
import { ICreateAppointmentDTO } from '@modules/appointments/dtos/ICreateAppointmentDTO';

import { Appointment } from '../entities/Appointment';

class AppointmentsRepository implements IAppointmentsRepository {
  private ormRepository: Repository<Appointment>;

  constructor() {
    this.ormRepository = getRepository(Appointment);
  }

  public async findByClientId(client_id: string): Promise<Appointment[]> {
    const appointments = await this.ormRepository.find({
      where: { client_id },
      relations: ["schedule"]
    });

    return appointments;
  }

  public async create(appointmentData: ICreateAppointmentDTO): Promise<Appointment> {
    const appointment = this.ormRepository.create(appointmentData);

    await this.ormRepository.save(appointment);

    return appointment;
  }
}

export { AppointmentsRepository };
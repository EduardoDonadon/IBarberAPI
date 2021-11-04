import { ICreateAppointmentDTO } from "@modules/appointments/dtos/ICreateAppointmentDTO";
import { Appointment } from "@modules/appointments/infra/typeorm/entities/Appointment";

export interface IAppointmentsRepository {
  create(data: ICreateAppointmentDTO): Promise<Appointment>
}
import { ICreateScheduleDTO } from "@modules/schedules/dtos/ICreateScheduleDTO";
import { Schedule } from "@modules/schedules/infra/typeorm/entities/Schedule";

export interface ISchedulesRepository {
  create(data: ICreateScheduleDTO): Promise<Schedule>;
  findAll(): Promise<Schedule[]>;
  findByBarberId(barber_id: string): Promise<Schedule[]>;
  findById(id: string): Promise<Schedule | undefined>
  save(schedule: Schedule): Promise<Schedule>;
}
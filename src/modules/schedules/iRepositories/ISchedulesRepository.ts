import { ICreateScheduleDTO } from "@modules/schedules/dtos/ICreateScheduleDTO";
import { Schedule } from "@modules/schedules/infra/typeorm/entities/Schedule";

export interface ISchedulesRepository {
  create(data: ICreateScheduleDTO): Promise<Schedule>
}
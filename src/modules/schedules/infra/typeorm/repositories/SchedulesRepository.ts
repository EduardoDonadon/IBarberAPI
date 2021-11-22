import { getRepository, Repository } from 'typeorm';

import { ISchedulesRepository } from '@modules/schedules/iRepositories/ISchedulesRepository';
import { ICreateScheduleDTO } from '@modules/schedules/dtos/ICreateScheduleDTO';

import { Schedule } from '../entities/Schedule';

class SchedulesRepository implements ISchedulesRepository {
  private ormRepository: Repository<Schedule>;

  constructor() {
    this.ormRepository = getRepository(Schedule);
  }
  
  public async findByBarberId(barber_id: string): Promise<Schedule[]> {
    const schedules = await this.ormRepository.find({ where: { barber_id } });

    return schedules;
  }

  public async findById(id: string): Promise<Schedule | undefined> {
    const schedule = await this.ormRepository.findOne(id);

    return schedule;
  }

  public async findAll(): Promise<Schedule[]> {
    const schedules = await this.ormRepository.find();

    return schedules;
  }

  public async create(scheduleData: ICreateScheduleDTO): Promise<Schedule> {
    const schedule = this.ormRepository.create(scheduleData);

    await this.ormRepository.save(schedule);

    return schedule;
  }

  public async save(schedule: Schedule): Promise<Schedule> {
    return this.ormRepository.save(schedule);
  }
}

export { SchedulesRepository };
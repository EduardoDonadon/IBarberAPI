import { injectable, inject } from 'tsyringe';

import { ISchedulesRepository } from '@modules/schedules/iRepositories/ISchedulesRepository';

interface IResquest {
  barber_id: string;
  date: Date;
}

@injectable()
export class CreateScheduleService {
  constructor(
    @inject('SchedulesRepository')
    private schedulesRepository: ISchedulesRepository
  ) {}

  async execute({barber_id, date}: IResquest) {
    const schedule = await this.schedulesRepository.create({
      barber_id,
      date
    })
    
    return schedule;
  }
}
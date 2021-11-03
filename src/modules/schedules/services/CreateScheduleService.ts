import { injectable, inject } from 'tsyringe';
import { hash } from 'bcryptjs';

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
    

    const schedule = this.schedulesRepository.create({
      barber_id,
      date
    })
    
    return schedule;
  }
}
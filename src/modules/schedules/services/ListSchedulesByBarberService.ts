import { injectable, inject } from 'tsyringe';

import { ISchedulesRepository } from '@modules/schedules/iRepositories/ISchedulesRepository';

@injectable()
export class ListSchedulesByBarberService {
  constructor(
    @inject('SchedulesRepository')
    private schedulesRepository: ISchedulesRepository
  ) {}

  async execute(barber_id: string) {
    const schedules = await this.schedulesRepository.findByBarberId(barber_id);
    
    return schedules;
  }
}
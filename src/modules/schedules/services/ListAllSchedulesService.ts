import { injectable, inject } from 'tsyringe';

import { ISchedulesRepository } from '@modules/schedules/iRepositories/ISchedulesRepository';

@injectable()
export class ListAllSchedulesService {
  constructor(
    @inject('SchedulesRepository')
    private schedulesRepository: ISchedulesRepository
  ) {}

  async execute() {
    const schedules = this.schedulesRepository.findAll();
    
    return schedules;
  }
}
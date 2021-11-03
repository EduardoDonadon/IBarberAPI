import { container }from 'tsyringe';

import { IUsersRepository } from '@modules/users/iRepositories/IUsersRepository';
import { UsersRepository } from '@modules/users/infra/typeorm/repositories/UsersRepository';

import { ISchedulesRepository } from '@modules/schedules/iRepositories/ISchedulesRepository';
import { SchedulesRepository } from '@modules/schedules/infra/typeorm/repositories/SchedulesRepository';

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository
)

container.registerSingleton<ISchedulesRepository>(
  'SchedulesRepository',
  SchedulesRepository
)
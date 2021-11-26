import { Router } from 'express';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';

import { CreateScheduleController } from '../controllers/CreateScheduleController';
import { ListAllSchedulesController } from '../controllers/ListAllSchedulesController';
import { ListSchedulesByBarberController } from '../controllers/ListSchedulesByBarberController';

const schedulesRouter = Router();

const createScheduleController = new CreateScheduleController();
const listAllSchedulesController = new ListAllSchedulesController();
const listSchedulesByBarberController = new ListSchedulesByBarberController();

schedulesRouter.post('/', ensureAuthenticated, createScheduleController.handle)
schedulesRouter.get('/', listAllSchedulesController.handle)
schedulesRouter.get('/:barber_id', ensureAuthenticated, listSchedulesByBarberController.handle)

export { schedulesRouter };
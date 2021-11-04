import { Router } from 'express';

import { CreateScheduleController } from '../controllers/CreateScheduleController';
import { ListAllSchedulesController } from '../controllers/ListAllSchedulesController';

const schedulesRouter = Router();

const createScheduleController = new CreateScheduleController();
const listAllSchedulesController = new ListAllSchedulesController();

schedulesRouter.post('/', createScheduleController.handle)
schedulesRouter.get('/', listAllSchedulesController.handle)

export { schedulesRouter };
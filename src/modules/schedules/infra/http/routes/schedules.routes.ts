import { Router } from 'express';

import { CreateScheduleController } from '../controllers/CreateScheduleController';

const schedulesRouter = Router();

const createScheduleController = new CreateScheduleController();

schedulesRouter.post('/', createScheduleController.handle)

export { schedulesRouter };
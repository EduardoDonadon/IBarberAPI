import { Router } from 'express';

import { CreateAppointmentController } from '../controllers/CreateAppointmentController';

const appointmentsRouter = Router();

const createAppointmentController = new CreateAppointmentController();

appointmentsRouter.post('/', createAppointmentController.handle);

export { appointmentsRouter };
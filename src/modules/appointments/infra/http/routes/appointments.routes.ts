import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import { Router } from 'express';

import { CreateAppointmentController } from '../controllers/CreateAppointmentController';
import { ListAppointmentsByClientIdController } from '../controllers/ListAppointmentsByClientIdController';

const appointmentsRouter = Router();

const createAppointmentController = new CreateAppointmentController();
const listAppointmentsByClientIdController = new ListAppointmentsByClientIdController();

appointmentsRouter.post('/', createAppointmentController.handle);
appointmentsRouter.get('/:client_id', ensureAuthenticated, listAppointmentsByClientIdController.handle);

export { appointmentsRouter };
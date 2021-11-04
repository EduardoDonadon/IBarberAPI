import Router from 'express';

const routes = Router();

import { usersRouter } from '@modules/users/infra/http/routes/users.routes';
import { schedulesRouter } from '@modules/schedules/infra/http/routes/schedules.routes';
import { appointmentsRouter } from '@modules/appointments/infra/http/routes/appointments.routes';

routes.use('/users', usersRouter);
routes.use('/schedules', schedulesRouter);
routes.use('/appointments', appointmentsRouter);

export { routes };
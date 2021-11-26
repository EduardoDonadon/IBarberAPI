import Router from 'express';

const routes = Router();

import { usersRouter } from '@modules/users/infra/http/routes/users.routes';
import { schedulesRouter } from '@modules/schedules/infra/http/routes/schedules.routes';
import { appointmentsRouter } from '@modules/appointments/infra/http/routes/appointments.routes';
import { cutsRouter } from '@modules/cuts/infra/http/routes/cuts.routes';

routes.use('/users', usersRouter);
routes.use('/schedules', schedulesRouter);
routes.use('/appointments', appointmentsRouter);
routes.use('/cuts', cutsRouter);

export { routes };
import Router from 'express';

const routes = Router();

import { usersRouter } from '@modules/users/infra/http/routes/users.routes';
import { schedulesRouter } from '@modules/schedules/infra/http/routes/schedules.routes';

routes.use('/users', usersRouter);
routes.use('/schedules', schedulesRouter);

export { routes };
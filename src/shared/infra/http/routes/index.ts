import Router from 'express';

const routes = Router();

import { usersRouter } from '@modules/users/infra/http/routes/users.routes';

routes.use('/users', usersRouter);

export { routes };
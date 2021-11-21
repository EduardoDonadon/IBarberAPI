import { Router } from 'express';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';

import { CreateUserController } from '../controllers/CreateUserController';
import { AuthenticateUserController } from '../controllers/AuthenticateUserController';
import { ListAllBarbersController } from '../controllers/ListAllBarbersController';

const usersRouter = Router();

const createUserController = new CreateUserController();
const authenticateUserController = new AuthenticateUserController();
const listAllBarbersController = new ListAllBarbersController();

usersRouter.post('/', createUserController.handle)
usersRouter.post('/authenticate', authenticateUserController.handle)

usersRouter.get('/barbers', ensureAuthenticated, listAllBarbersController.handle)

export { usersRouter };
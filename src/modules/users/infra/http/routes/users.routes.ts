import { Router } from 'express';

import { CreateUserController } from '../controllers/CreateUserController';
import { AuthenticateUserController } from '../controllers/AuthenticateUserController';

const usersRouter = Router();

const createUserController = new CreateUserController();
const authenticateUserController = new AuthenticateUserController();

usersRouter.post('/', createUserController.handle)
usersRouter.post('/authenticate', authenticateUserController.handle)

export { usersRouter };
import { Router } from 'express';
import multer from 'multer';

import uploadConfig from '@config/storage';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';

import { CreateUserController } from '../controllers/CreateUserController';
import { AuthenticateUserController } from '../controllers/AuthenticateUserController';
import { ListAllBarbersController } from '../controllers/ListAllBarbersController';
import { UpdateUserAvatarController } from '../controllers/UpdateUserAvatarController';

const usersRouter = Router();

const upload = multer(uploadConfig.multer);

const createUserController = new CreateUserController();
const authenticateUserController = new AuthenticateUserController();
const listAllBarbersController = new ListAllBarbersController();
const updateUserAvatarController = new UpdateUserAvatarController();

usersRouter.post('/', createUserController.handle)
usersRouter.post('/authenticate', authenticateUserController.handle)

usersRouter.get('/barbers', ensureAuthenticated, listAllBarbersController.handle)

usersRouter.patch(
  '/avatar',
  ensureAuthenticated,
  upload.single('avatar'),
  updateUserAvatarController.handle,
);

export { usersRouter };
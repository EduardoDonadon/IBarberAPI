import { Router } from 'express';
import multer from 'multer';

import uploadConfig from '@config/storage';
import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';

import { ListCutsByBarberIdController } from '../controllers/ListCutsByBarberIdController';
import { CreateCutController } from '../controllers/CreateCutController';

const cutsRouter = Router();

const upload = multer(uploadConfig.multer);

const listCutsByBarberIdController = new ListCutsByBarberIdController();
const createCutController = new CreateCutController();

cutsRouter.get('/:barber_id', ensureAuthenticated, listCutsByBarberIdController.handle)

cutsRouter.post(
  '/',
  ensureAuthenticated,
  upload.single('cut_photo'),
  createCutController.handle,
);

export { cutsRouter };
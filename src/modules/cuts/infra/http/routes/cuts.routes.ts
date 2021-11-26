import { Router } from 'express';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';

import { ListCutsByBarberIdController } from '../controllers/ListCutsByBarberIdController';

const cutsRouter = Router();

const listCutsByBarberIdController = new ListCutsByBarberIdController();

cutsRouter.get('/:barber_id', ensureAuthenticated, listCutsByBarberIdController.handle)

export { cutsRouter };
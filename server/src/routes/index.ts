import { Router } from 'express';
import sessionRouter from './session.routes';
import userRouter from './users.routes';

const routes = Router();

routes.use('/users', userRouter);
routes.use('/sessions', sessionRouter);

export default routes;

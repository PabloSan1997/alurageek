import express, {Express} from 'express';
import { routerProductos } from './porductRouter';
import { userRouter } from './userRouter';

const mainRouter = express.Router();

export function crearProducto(app:Express):void{
   app.use('/api/v1', mainRouter);
    mainRouter.use('/productos', routerProductos);
    mainRouter.use('/usuarios', userRouter);
}
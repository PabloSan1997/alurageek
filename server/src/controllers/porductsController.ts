import { Response, Request, NextFunction } from 'express';
import boom from '@hapi/boom';
import { AppDataSource } from '../db/config';
import { Productos } from '../db/models/ProductosModels';

export class ProductosController {
    async leerProductos(req: Request, res: Response, next: NextFunction) {
        const prosuctosRepository = AppDataSource.getRepository(Productos);
        try {
            const datos = await prosuctosRepository.find();
            res.json(datos);
        } catch (error) {
            next(error);
        }
    }
}
import { ProductosController } from "../controllers/porductsController";
import express from 'express';

const servicios = new ProductosController();
export const routerProductos = express.Router();

routerProductos.get('/', servicios.leerProductos);

import { ProductosController } from "../controllers/porductsController";
import express from 'express';
import { autentificar } from "../middlewares/autentificacion";

const servicios = new ProductosController();
export const routerProductos = express.Router();

routerProductos.get('/', servicios.leerProductos);
routerProductos.post('/', autentificar, servicios.agregarProducto);
routerProductos.delete('/:id_product', autentificar,servicios.borrarProducto);
routerProductos.patch('/', autentificar ,servicios.editarProducto);
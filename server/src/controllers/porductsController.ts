import { Response, Request, NextFunction } from 'express';
import boom from '@hapi/boom';
import { AppDataSource } from '../db/config';
import { Productos } from '../db/models/ProductosModels';
import { v4 as uuidV4 } from 'uuid';

export class ProductosController {
    async leerProductos(req: Request, res: Response, next: NextFunction) {
        const productosRepository = AppDataSource.getRepository(Productos);
        try {
            const datos = await productosRepository.find();
            res.json(datos);
        } catch (error) {
            next(error);
        }
    }
    async leerProductoCategoria(req: Request, res: Response, next: NextFunction){
        const {categoria} = req.params;
        const productosRepository = AppDataSource.getRepository(Productos);
        try {
            const productos = await productosRepository.find({where:{categoria}});
            res.json(productos);
        } catch (error) {
            next(boom.notFound('No se encontraron elementos'));
        }
    }
    async leerProductoUno(req: Request, res: Response, next: NextFunction){
        const {id_product} = req.params;
        const productosRepository = AppDataSource.getRepository(Productos);
        try {
            const productos = await productosRepository.find({where:{id_product}});
            if(productos.length===0){
                throw 'No existe ese producto';
            }
            res.json(productos[0]);
        } catch (error) {
            if(typeof error == 'string'){
                next(boom.notFound(error));
            }
            next(boom.notFound('No se encontraron elementos'));
        }
    }
    async agregarProducto(req: Request, res: Response, next: NextFunction) {
        try {
            const productosRepository = AppDataSource.getRepository(Productos);
            const { nombre, precio, categoria, descripcion, imageurl } = req.body as ProductoReq;
            const productoNuevo = new Productos();
            productoNuevo.id_product = uuidV4();
            productoNuevo.nombre = nombre;
            productoNuevo.descripcion = descripcion;
            productoNuevo.precio = precio;
            productoNuevo.imageurl = imageurl;
            productoNuevo.categoria = categoria;
            await productosRepository.manager.save(productoNuevo);
            res.status(201).json({ message: 'Se agregó elemento con exito' });
        } catch (error) {
            next(boom.badRequest('No se puede agregar elemento'));
        }
    }
    async borrarProducto(req: Request, res: Response, next: NextFunction) {
        try {
            const { id_product } = req.params;
            const productosRepository = AppDataSource.getRepository(Productos);
            const producto = await productosRepository.find({ where: { id_product } });
            if (producto.length === 0) {
                throw 'No se puede borrar producto';
            }
            await productosRepository.delete({ id_product });
            res.json({ message: 'Se borro producto con exito' });
        } catch (error) {
            if (typeof error === 'string') {
                next(boom.notFound(error));
            }
            next(boom.badImplementation('Problemas para borrar elemento'));
        }
    }
    async editarProducto(req: Request, res: Response, next: NextFunction) {
        const productosRepository = AppDataSource.getRepository(Productos);
        try {
            const cuerpo = req.body as ProductoReqRes;
            const buscar = await productosRepository.find({ where: { id_product: cuerpo.id_product } });
            if (buscar.length === 0) {
                throw 'No se encontro producto para editar';
            }
            await productosRepository.update({id_product:cuerpo.id_product}, {...buscar[0], ...cuerpo});
            res.status(201).json({message:"Se edito porducto con exito"});
        } catch (error) {
            if (typeof error === 'string') {
                next(boom.notFound(error));
            }
            next(boom.badImplementation('Problemas para editar elemento'));
        }
    }
}

type ProductoReq = {
    nombre: string,
    precio: number,
    categoria: string,
    descripcion: string,
    imageurl:string
}
type ProductoReqRes = {
    id_product: string,
    nombre: string,
    precio: number,
    categoria: string,
    descripcion: string,
    imageurl:string
}
import { Response, Request, NextFunction } from 'express';
import 'dotenv/config';
import { AppDataSource } from '../db/config';
import { Users } from '../db/models/UserModels';
import { v4 as uuid4 } from 'uuid';
import bcrypt from 'bcrypt';
import boom from '@hapi/boom';
import jwt from 'jsonwebtoken';
import { PALABRA } from '../config/variables';


export class UserController {
    async leerUsuarios(req: Request, res: Response) {
        res.json({ message: 'Permitido las solicitudes al usuario' });
    }
    async agregarUsuario(req: Request, res: Response, next: NextFunction) {
        try {
            const repositorio = AppDataSource.getRepository(Users);
            const { nombre, email, contra, superUusario } = req.body as Usuario;
            const ver = await repositorio.find({ where: { email } });
            if (ver.length > 0) {
                throw 'Ese usuario ya existe';
            }
            const id_users = uuid4();
            const encriptar = await bcrypt.hash(contra, 5);
            const nuevoUsuario = new Users();
            nuevoUsuario.contra = encriptar;
            nuevoUsuario.email = email;
            nuevoUsuario.nombre = nombre;
            nuevoUsuario.id_users = id_users;
            nuevoUsuario.superUusario=superUusario;
            repositorio.manager.save(nuevoUsuario);
            res.status(201).json({ message: 'Usuario agregado con exito' })
        } catch (error) {
            const texto = error as string;
            next(boom.badRequest(typeof error !== 'string' ? 'No se puede agregar usuario' : texto));
        }
    }
    async iniciarSeccion(req: Request, res: Response, next: NextFunction) {
        try {
            const { email, contra } = req.body as Inicio;
            const repositorio = AppDataSource.getRepository(Users);
            const usuario = await repositorio.find({ where: { email } });
            if (usuario.length == 0 || !PALABRA) {
                throw boom.badRequest('No se encontró usuario');
            }
            const ver = await bcrypt.compare(contra, usuario[0].contra);
            if (!ver) {
                throw boom.badRequest('Contraceña incorrecta');
            }
            const dato = await repositorio.findOneBy({ id_users: usuario[0].id_users });
            if (!dato?.contra) {
                throw boom.badRequest('No se encontró usuario');
            }
            dato.contra = await bcrypt.hash(contra, 5);
            await repositorio.manager.save(dato);
            const token = jwt.sign({...dato}, PALABRA);
            res.json({token, nombre:dato.nombre, entrada:true, superUusario:dato.superUusario});
        } catch (error) {
            next(error);
        }
    }
    async inicarConToken(req: Request, res: Response, next: NextFunction){
        const {token} = req.body;
        if(!token){
            res.json({entrada:false});
        }
        try {
            const repositorio = AppDataSource.getRepository(Users);
        const data = jwt.verify(token, PALABRA) as Usuario;
        const usuario = await repositorio.find({where:{
            email:data.email
        }});
        if(usuario.length===0 && usuario[0].superUusario){
            throw 'No tienes permiso';
        }
        res.json({entrada:true, token, nombre:usuario[0].nombre, superUusario:usuario[0].superUusario});
        } catch (error) {
            res.json({entrada:false});
        }
        
    }
}

interface Usuario {
    nombre: string,
    email: string,
    contra: string,
    superUusario:boolean
}
interface Inicio {
    email: string,
    contra: string
}

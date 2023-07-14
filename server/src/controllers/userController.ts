import { Response, Request, NextFunction } from 'express';
import { AppDataSource } from '../db/config';
import { Users } from '../db/models/UserModels';
import { v4 as uuid4 } from 'uuid';
import bcrypt from 'bcrypt';
import boom from '@hapi/boom';

export class UserController {
    async leerUsuarios(req: Request, res: Response) {
        res.json({ message: 'Permitido las solicitudes al usuario' });
    }
    async agregarUsuario(req: Request, res: Response, next: NextFunction) {
        try {
            const repositorio = AppDataSource.getRepository(Users);
            const { nombre, email, contra } = req.body as Usuario;
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
            repositorio.manager.save(nuevoUsuario);
            res.status(201).json({ message: 'Usuario agregado con exito' })
        } catch (error) {
            const texto = error as string;
            next(boom.badRequest(typeof error !== 'string' ? 'No se puede agregar usuario' : texto));
        }
    }
    async iniciarSeccion(req: Request, res: Response, next: NextFunction) {
        const { email, contra } = req.body as Inicio;
        const repositorio = AppDataSource.getRepository(Users);
        const usuario = await repositorio.find({ where: { email } });
        if (usuario.length == 0) {
            next(boom.badRequest('No se encontró usuario'));
        }
        const ver = await bcrypt.compare(contra, usuario[0].contra);
        if (!ver) {
            next(boom.badRequest('Contraceña incorrecta'));
        } else {
            res.json(usuario[0]);
        }
    }
}

interface Usuario {
    nombre: string,
    email: string,
    contra: string
}
interface Inicio {
    email: string,
    contra: string
}

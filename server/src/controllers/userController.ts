import { Response, Request, NextFunction } from 'express';
import { AppDataSource } from '../db/config';
import { Users } from '../db/models/UserModels';


export class UserController{
    async leerUsuarios(req:Request , res:Response, next:NextFunction){
        const usuarioRepository = AppDataSource.getRepository(Users);
        const usuarios = await usuarioRepository.find();
        res.json(usuarios);
    }
}
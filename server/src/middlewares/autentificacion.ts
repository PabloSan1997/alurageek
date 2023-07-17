import {Response, Request, NextFunction} from 'express';
import boom from '@hapi/boom';
import { Users } from '../db/models/UserModels';
import { AppDataSource } from '../db/config';
import jwt from 'jsonwebtoken';
import { PALABRA } from '../config/variables';


export async function autentificar(req:Request, res:Response, next:NextFunction){
    try {
        const token = req.headers.token as string;
    if(!token){
        throw boom.badRequest('No tienes permiso para esta accion');
    }
    const repositorio = AppDataSource.getRepository(Users);
    const data = jwt.verify(token, PALABRA) as Usuario;
    const usuario = await repositorio.find({where:{
        email:data.email
    }});
    if(usuario.length===0 && usuario[0].superUusario){
        throw 'No tienes permiso';
    }
    next();
    } catch (error) {
        if(typeof error==='string'){
           next(boom.badRequest(error));
        }
        next(boom.badRequest('No se puede generar la accion'));
    }
    
    
}


interface Usuario {
    nombre: string,
    email: string,
    contra: string,
    superUusario:boolean
}

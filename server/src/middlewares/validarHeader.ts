import {Response, Request, NextFunction} from 'express';
import 'dotenv/config';
import boom from '@hapi/boom';

const {PASAR} = process.env;
export function validarHeaders(req:Request, res:Response, next:NextFunction){
    if(PASAR !== req.headers.cabeza){
        throw boom.notAcceptable('No tienes permiso para acceder');
    }
    next();
}
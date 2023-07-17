import {Response, Request, NextFunction} from 'express';
import 'dotenv/config';
import boom from '@hapi/boom';
import { PASAR } from '../config/variables';


export function validarHeaders(req:Request, res:Response, next:NextFunction){
    if(PASAR !== req.headers.cabeza){
        throw boom.notAcceptable('No tienes permiso para acceder');
    }
    next();
}
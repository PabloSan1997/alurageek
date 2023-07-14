import {Boom} from '@hapi/boom';
import {Request, Response, NextFunction} from 'express';

export function boomHandle(err:Boom, req:Request, res:Response, next:NextFunction){
    if(err.isBoom){
        const data = err.output.payload;
        res.status(data.statusCode).json(data);
    }
    next(err);
}
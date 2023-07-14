import { UserController } from "../controllers/userController";
import express from 'express';

const servicios = new UserController();

export const userRouter = express.Router();

userRouter.get('/', servicios.leerUsuarios);
userRouter.post('/iniciar', servicios.iniciarSeccion);
userRouter.post('/agregar', servicios.agregarUsuario);
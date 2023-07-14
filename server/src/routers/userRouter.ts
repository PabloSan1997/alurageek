import { UserController } from "../controllers/userController";
import express from 'express';

const servicios = new UserController();

export const userRouter = express.Router();

userRouter.get('/', servicios.leerUsuarios);
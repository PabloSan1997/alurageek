import {DataSource} from 'typeorm';
import { Productos } from './models/ProductosModels';
import { Users } from './models/UserModels';
import 'dotenv/config';

const {URL_DATABASE} = process.env

export const AppDataSource = new DataSource({
    type: "postgres",
    url:URL_DATABASE,
    synchronize: true,
    ssl:{
        rejectUnauthorized:true
    },
    logging: true,
    entities: [Productos, Users],
    subscribers: [],
    migrations: [],
})
import {DataSource} from 'typeorm';
import { Productos } from './models/ProductosModels';
import { Users } from './models/UserModels';
import 'dotenv/config';
import { URL_DATABASE } from '../config/variables';



export const AppDataSource = new DataSource({
    type: "postgres",
    url:URL_DATABASE,
    synchronize: true,
    // ssl:{
    //     rejectUnauthorized:true
    // },
    logging: true,
    entities: [Productos, Users],
    subscribers: [],
    migrations: [],
})
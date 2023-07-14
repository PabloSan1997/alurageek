import express from 'express';
import cors from 'cors';
import "reflect-metadata";
import { crearProducto } from './routers';
import { boomHandle } from './middlewares/boomHandle';
import { AppDataSource } from './db/config';
import 'dotenv/config';

(async () => {
    try {
        const app = express();
        const PORT = process.env.PORT || 3001;
        await AppDataSource.initialize();
    
        app.use(cors());

        crearProducto(app);
        app.use(boomHandle);

        app.get('/', async (req, res) => {
            res.json({ message: 'Bienvenido a mi Api' });
        });

        app.listen(PORT);
    } catch (error) {
        console.log('error con la base de datos');
    }
})();

import { useParams } from 'react-router-dom';
import { Header } from '../components/Header'
import React from 'react';
import { initialSTate, leerUnoProducto } from '../Api/leerUnoProducto';
import Descripcion from '../components/Descripcion';
import { ProductosRelacionados } from '../components/ProductosRelacionados';
import {Contactanos} from '../components/Contactanos';


export function ProductOne() {
    const { id_product } = useParams();
    const [producto, setProducto] = React.useState<ProductoRes>(initialSTate);
    React.useEffect(() => {
        if (id_product) {
            void (async () => {
                const data = await leerUnoProducto(id_product);
                setProducto(data);
            })();
        }
    }
        , [id_product]);
    return (
        <>
            <Header />
            <Descripcion {...producto} />
            <ProductosRelacionados categoria={producto.categoria}/>
            <Contactanos/>
        </>
    )
}

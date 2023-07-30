import { useParams } from 'react-router-dom';
import { Header } from '../components/Header'
import React from 'react';
import { leerUnoProducto } from '../Api/leerUnoProducto';
import Descripcion from '../components/Descripcion';
import { ProductosRelacionados } from '../components/ProductosRelacionados';
import {Contactanos} from '../components/Contactanos';
import { UseContexto } from '../context';
import { Footer } from '../components/Footer';
import { Loading } from '../components/Loading';
import { initialStateProduct } from '../utilities/initialState';


export function ProductOne() {
    const { id_product } = useParams();
    const {setProductoSeleccionado} = UseContexto();
    const [producto, setProducto] = React.useState<ProductoRes>(initialStateProduct);
    const [loading, setLoading] = React.useState<boolean>(true);
    React.useEffect(() => {
        if (id_product) {
                leerUnoProducto(id_product)
                .then(data=>{
                    setProducto(data);
                    setProductoSeleccionado(id_product);
                    setLoading(false);
                })
                .catch(error=>console.log(error));
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
        , [id_product]);
    if(loading){
        return <Loading/>;
    }
    return (
        <>
            <Header />
            <Descripcion {...producto} />
            <ProductosRelacionados categoria={producto.categoria}/>
            <Contactanos/>
            <Footer/>
        </>
    )
}

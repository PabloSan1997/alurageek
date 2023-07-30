import React from 'react'
import { leerCategoria } from '../Api/leerCategoria';
import { leerTodosLosProductos } from '../Api/leerRodosProductos';
import { Caja } from './Caja';
import { Loading } from './Loading';


export default function ContenedorCajas({ categoria }: { categoria: string | undefined }) {
    const [productos, setProductos] = React.useState<ProductoRes[]>([]);
    const [loading, setLoading] = React.useState<boolean>(true);
    React.useEffect(
        () => {
            if (!categoria) {
                leerTodosLosProductos()
                    .then(elementos => {
                        setProductos(elementos);
                        setLoading(false);
                    })
                    .catch(error => console.error(error));
            } else {
                leerCategoria(categoria)
                    .then(elementos => {
                        setProductos(elementos);
                        setLoading(false);
                    })
                    .catch(error => console.log(error));
            }
        }
        , [categoria]);
    if (loading) {
        return <Loading/>
    }
    return (
        <div className='contenedor'>
            {productos.map(elementos => (
                <Caja key={elementos.id_product} {...elementos} />
            ))}
        </div>
    )
}

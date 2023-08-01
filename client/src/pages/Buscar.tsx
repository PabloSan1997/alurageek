import { useParams } from "react-router-dom"
import { Header } from "../components/Header";
import '../estilos/porductos.scss'
import { Contactanos } from "../components/Contactanos";
import { Footer } from "../components/Footer";
import React from "react";
import { leerTodosLosProductos } from "../Api/leerRodosProductos";
import { filtrarElementos } from "../utilities/filtrar";
import { Caja } from "../components/Caja";
import { Loading } from "../components/Loading";

export function Buscar() {
    const { buscar } = useParams();
    const [producto, setProducto] = React.useState<ProductoRes[]>([]);
    const [loading, setLoading] = React.useState(true);

    //Con el parametro buscar se filtran los elementos a renderizar
    //Solo se renderizan los elementos cuyo nombre tenga alguna coincidencia con el parametro "buscar"
    React.useEffect(() => {
        leerTodosLosProductos()
            .then(elementos => {
                const filtrar = elementos.filter(filtrarElementos(buscar));
                setProducto(filtrar);
                setLoading(false);
            })
            .catch(error => {
                console.log(error);
                setProducto([]);
                setLoading(false);
            });
    }, [buscar, producto]);

    if(loading){
        return <Loading/>
    }
    return (
        <>
            <Header />
            <h2 className="tituloProductos">Buscar: "{buscar}"</h2>
                {producto.length !== 0 ?
                <div className="contenedor">
                   { producto.map(elementos => (
                        
                             <Caja key={elementos.id_product} {...elementos} />
                        
                    ))}</div>
                    : <p className="leyenda">No se encontraron elementos</p>}
            <Contactanos />
            <Footer />
        </>
    )
}

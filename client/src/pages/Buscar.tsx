import { useParams } from "react-router-dom"
import { Header } from "../components/Header";
import '../estilos/porductos.scss'
import { Contactanos } from "../components/Contactanos";
import { Footer } from "../components/Footer";
import React from "react";
import { leerTodosLosProductos } from "../Api/leerRodosProductos";
import { filtrarElementos } from "../utilities/filtrar";
import { Caja } from "../components/Caja";

export function Buscar() {
    const { buscar } = useParams();
    const [producto, setProducto] = React.useState<ProductoRes[]>([]);
    React.useEffect(() => {
        leerTodosLosProductos()
            .then(elementos => {
                const filtrar = elementos.filter(filtrarElementos(buscar));
                setProducto(filtrar);
            })
            .catch(error => {
                console.log(error);
                setProducto([]);
            });
    }, [buscar, producto]);
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

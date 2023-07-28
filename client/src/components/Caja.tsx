import { Link } from "react-router-dom";
import { UseContexto } from "../context";
import basurero from '../asserts/basura.svg';
import lapiz from '../asserts/lapiz.svg';
import { borrarProducto } from "../Api/borrarProducto";

export function Caja({ nombre, precio, imageurl, id_product }: ProductoRes): JSX.Element {
    const { permiso, cookie } = UseContexto();
    const borrar = () => {
        borrarProducto(id_product, cookie.galleta)
            .then(message => {
                alert(message.message);
                window.location.reload();
            })
            .catch(error => alert(error));
    }
    return (
        <div className="caja">
            {permiso ? (
                <div className="area_opciones">
                    <img
                        src={basurero}
                        alt="borrar"
                        className="opcion"
                        id="borrar"
                        onClick={borrar}
                        />
                    <img
                        src={lapiz}
                        alt="editar"
                        className="opcion"
                        id="editar" 
                        />
                </div>
            ) : null}
            <img src={imageurl} alt={nombre} className="imagen_producto" />
            <h3>{nombre}</h3>
            <span>${precio}</span>
            <Link to={`/products/especifico/${id_product}`} className='ver_todo'>Ver producto</Link>
        </div>
    );
}

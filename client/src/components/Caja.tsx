import { UseContexto } from "../context";
import basurero from '../asserts/basura.svg';
import lapiz from '../asserts/lapiz.svg';
import { borrarProducto } from "../Api/borrarProducto";
import { useNavigate} from 'react-router-dom';

export function Caja({ nombre, precio, imageurl, id_product }: ProductoRes): JSX.Element {
    const { permiso, cookie, superUusario } = UseContexto();
    const navegar = useNavigate();
    const borrar = () => {
        borrarProducto(id_product, cookie.galleta)
            .then(message => {
                alert(message.message);
                window.location.reload();
            })
            .catch(error => alert(error));
    }
    const ir =()=>{
        navegar(`/editar/${id_product}`);
    }
    const verProducto = () =>{
        navegar(`/products/especifico/${id_product}`);
        window.location.reload();
    }
    return (
        <div className="caja">
            {permiso && superUusario ? (
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
                        onClick={ir}
                        />
                </div>
            ) : null}
            <img src={imageurl} alt={nombre} className="imagen_producto" />
            <h3>{nombre}</h3>
            <span>${precio}</span>
            <button className='ver_todo' onClick={verProducto}>Ver producto</button>
        </div>
    );
}

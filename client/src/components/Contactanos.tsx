import '../estilos/contactanos.scss'
import logo from '../asserts/tituloLogo.svg';
import { FomularioContacto } from './FomularioContacto';

//Opciones en la seccion de Contactanos
const opciones: string[] = [
    'Quienes somos',
    'Politica de Privacidad',
     'Programa de fidelidad',
    'Nuestras tiendas', 
    'Quiero ser franquiciado',
    'Anuncie aqui'];

export  function Contactanos() {
    return (
        <div className="area_contacto">
           <div className="area_sol">
           <img src={logo} alt="logo titulo" className='img_logo' />
                <nav className='menu_lista'>
                    <ul>
                        {opciones.map(elemento=>(
                            <Lista key={elemento} lista={elemento}/>
                        ))}
                    </ul>
                </nav>
           </div>
                <FomularioContacto/>
        </div>
    )
}

const Lista = ({lista}:{lista:string}) =>{
    return (
        <li><a href="#">{lista}</a></li>
    );
}

import '../estilos/header.scss';
import tituloLogo from '../asserts/tituloLogo.svg';
import { Buscador } from './Buscador';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { UseContexto } from '../context';

const pageLogin = '/login';
const pageAgregar = '/agregar';

export function Header() {
  const navegar = useNavigate();
  const location = useLocation();
  const { permiso, nombre, superUusario } = UseContexto();
  const {removeCookie} = UseContexto();

  const cerrarSecion = () =>{
    removeCookie('galleta');
    window.location.reload();
  }

  return (
    <header>
      <h1><Link to='/'><img src={tituloLogo} alt="titulo logo" /></Link></h1>
      <Buscador />
      { !permiso ?
        (location.pathname !== pageLogin && <button className='botonHeader' onClick={() => navegar('/login')}>Login</button>) :
        (
          <div className="area_boton">
            <span className='usuario_nombre'>{nombre}</span>
            {location.pathname !== pageAgregar && superUusario && <button className='botonHeader' id="agregar" onClick={()=>navegar('/agregar')}>Agregar</button>}
            <button className='botonHeader' id="logout" onClick={cerrarSecion}>Logout</button>
          </div>
        )
      }
    </header>
  )
}

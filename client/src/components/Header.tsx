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
  const { permiso } = UseContexto();
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
          <>
           {location.pathname !== pageAgregar && <button className='botonHeader' onClick={()=>navegar('/agregar')}>Agregar Producto</button>}
            <button className='botonHeader' onClick={cerrarSecion}>Logout</button>
          </>
        )
      }
    </header>
  )
}

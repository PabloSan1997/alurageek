import '../estilos/header.scss';
import tituloLogo from '../asserts/tituloLogo.svg';
import { Buscador } from './Buscador';
import {Link, useLocation, useNavigate} from 'react-router-dom';
import { UseContexto } from '../context';
const pageLogin = '/login';

export  function Header() {
  const navegar = useNavigate();
  const location = useLocation();
  const {permiso} = UseContexto();
  return (
    <header>
      <h1><Link to='/'><img src={tituloLogo} alt="titulo logo" /></Link></h1>
      <Buscador/>
      {location.pathname!==pageLogin && !permiso?
      <button className='botonHeader' onClick={()=>navegar('/login')}>Login</button>:
      null
      }
    </header>
  )
}

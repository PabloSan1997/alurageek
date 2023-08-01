import '../estilos/header.scss';
import tituloLogo from '../asserts/tituloLogo.svg';
import { Buscador } from './Buscador';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { UseContexto } from '../context';

//Routas en especifico en donde los botones deben renderizar
const pageLogin = '/login';
const pageAgregar = '/agregar';
//En el router /login no deben renderizar los botones "Agregar", "Logout" y el nombre del usuario


export function Header() {
  const navegar = useNavigate();
  const location = useLocation();
  const { permiso, nombre, superUusario } = UseContexto();
  const { removeCookie } = UseContexto();

  //Si se cierra seccion, se elimina las cookies
  const cerrarSecion = () => {
    removeCookie('galleta');
    window.location.reload();
  }

  return (
    <>
      <header id="header1">
        <h1><Link to='/'><img src={tituloLogo} alt="titulo logo" /></Link></h1>
        <Buscador />
        {/* Si "permiso" es false y no se esta en la ruta "/login", se debe mostrar el boton "log in" */ }
        {!permiso ?
          (location.pathname !== pageLogin && <button className='botonHeader' onClick={() => navegar('/login')}>Log in</button>) :
          (
            <div className="area_boton">
              <span className='usuario_nombre'>{nombre}</span>
              {location.pathname !== pageAgregar && superUusario && <button className='botonHeader' id="agregar" onClick={() => navegar('/agregar')}>Agregar</button>}
              <button className='botonHeader' id="logout" onClick={cerrarSecion}>Logout</button>
            </div>
          )
        }
      </header>
      <header id="header2">
        <div className="area-header">
          <h1><Link to='/'><img src={tituloLogo} alt="titulo logo" /></Link></h1>
           {/* Si "permiso" es false y se esta en la ruta "/login", no se debe mostrar el boton "log in" */ }
          {!permiso ?
              (
                location.pathname !== pageLogin && <button className='botonHeader' onClick={() => navegar('/login')}>Log in</button>) :
            (
              <div className="area_boton">
                <span className='usuario_nombre'>{nombre}</span>
                {/* Si no se tiene permiso de "superUusuario" el boton agregar no puede renderizarse */}
                {location.pathname !== pageAgregar && superUusario && <button className='botonHeader' id="agregar" onClick={() => navegar('/agregar')}>Agregar</button>}
                <button className='botonHeader' id="logout" onClick={cerrarSecion}>Logout</button>
              </div>
            )
          }
        </div>
        <Buscador />
      </header>
    </>
  )
}

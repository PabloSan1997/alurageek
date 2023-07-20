import '../estilos/header.scss';
import tituloLogo from '../asserts/tituloLogo.svg';
import { Buscador } from './Buscador';

export  function Header() {
  return (
    <header>
      <h1><img src={tituloLogo} alt="titulo logo" /></h1>
      <Buscador/>
      <button className='botonHeader'>Login</button>
    </header>
  )
}

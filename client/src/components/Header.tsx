import '../estilos/header.scss';
import tituloLogo from '../asserts/tituloLogo.svg';
import { Buscador } from './Buscador';
import {Link} from 'react-router-dom';

export  function Header() {
  return (
    <header>
      <h1><Link to='/'><img src={tituloLogo} alt="titulo logo" /></Link></h1>
      <Buscador/>
      <button className='botonHeader'>Login</button>
    </header>
  )
}

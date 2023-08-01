import React from 'react';
import lupita from '../asserts/lupita.svg'
import {useNavigate} from 'react-router-dom';

export function Buscador() {
  const navegar = useNavigate();
  const [texto, setTexto] = React.useState('');

  const escribir = (e:React.ChangeEvent<HTMLInputElement>) =>{
    setTexto(e.target.value);
  }

  //Si el buscador esta vacío, el boton buscar manda la accion de ir al ruta de todos los productos
  //Si no esta vacío manda a la ruta de la pagina "buscar" con el parametro que tenga el buscador
  const ir=(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    if(!texto){
      navegar(`/products`);
    }else{
      navegar(`/buscar/${texto}`);
    }
    
  }
  return (
    <form className="buscador" onSubmit={ir}>
        <input 
        type="text" 
        className='buscar' 
        placeholder='¿Qué desea buscar?'
        value={texto}
        onChange={escribir}
        />
        <button className='buscar-boton' type="submit"><img src={lupita} alt="buscar" /></button>
    </form>
  )
}

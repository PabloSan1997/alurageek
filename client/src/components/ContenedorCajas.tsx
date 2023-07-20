

import React from 'react'
import { leerCategoria } from '../Api/leerCategoria';
import { leerTodosLosProductos } from '../Api/leerRodosProductos';

export default function ContenedorCajas({categoria}:{categoria:string|undefined}) {
    const [productos, setProductos] = React.useState<ProductoRes[]>([]);
    React.useEffect(
        ()=>{
            if(!categoria){
                leerTodosLosProductos()
                .then(elementos=>setProductos(elementos))
                .catch(error=>console.error(error));
            }else{
                leerCategoria(categoria)
                .then(elementos=>setProductos(elementos))
                .catch(error=>console.log(error));
            }
        }
        ,[categoria]);
  return (
    <div className='contenedor'>
        {productos.map(elementos=>(
            <Cajas key={elementos.id_product} {...elementos}/>
        ))}
    </div>
  )
}

function Cajas({nombre, precio, categoria, imageurl}:ProductoRes):JSX.Element{
    return (
        <div className="cajas">
            <img src={imageurl} alt={nombre} />
            <h2>{nombre}</h2>
            <span className='precio'>${precio}</span>
            <span className='categodia'>{categoria}</span>
        </div>
    );
}
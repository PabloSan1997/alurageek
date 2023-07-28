import React from 'react'
import { leerCategoria } from '../Api/leerCategoria';
import { leerTodosLosProductos } from '../Api/leerRodosProductos';
import { Caja } from './Caja';


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
            <Caja key={elementos.id_product} {...elementos}/>
        ))}
    </div>
  )
}

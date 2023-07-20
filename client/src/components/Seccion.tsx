import React from 'react'
import { Link } from 'react-router-dom';
import { leerCategoria } from '../Api/leerCategoria';


export function Seccion({categoria}:Seccion) {
  const [productosCategoria, setProductosCategoria] = React.useState<ProductoRes[]>([]);
  React.useEffect(()=>{
    leerCategoria(categoria)
    .then(elementos=>setProductosCategoria(elementos))
    .catch(error=>console.error(error));
  },[]);
  
  return (
    <div className="seccion">
      <div className="titulos">
      <h2>{categoria}</h2>
      <Link to={`/products/categoria/${categoria}`}>Ver Todos →</Link>
      </div>
      {productosCategoria.map(elementos=>(
        <Caja key={elementos.id_product} {...elementos}/>
      ))}
    </div>
  )
}

function Caja({nombre, precio, imageurl, id_product}:ProductoRes):JSX.Element{
  return(
    <div className="caja">
      <img src={imageurl} alt={nombre} />
      <h3>{nombre}</h3>
      <span>${precio}</span>
      <Link to={`/products/especifico/${id_product}`} className='ver_todo'>Ver producto</Link>
    </div>
  );
}

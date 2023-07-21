import React from 'react'
import { Link } from 'react-router-dom';
import { leerCategoria } from '../Api/leerCategoria';
import '../estilos/seccion.scss'
import { cortarInformacion } from '../utilities/cortarInfo';

export function Seccion({ categoria }: Seccion) {
  const [productosCategoria, setProductosCategoria] = React.useState<ProductoRes[]>([]);
  React.useEffect(() => {
    leerCategoria(categoria)
      .then(elementos => setProductosCategoria(cortarInformacion(elementos)))
      .catch(error => console.error(error));
  }, [categoria]);

  return (
    <div className="seccion">
      <div className="titulos">
        <h2>{categoria}</h2>
        <Link to={`/products/categoria/${categoria}`}>Ver Todos 🡪</Link>
      </div>
      <div className="area_pagina">
        {productosCategoria.map(elementos => (
          <Caja key={elementos.id_product} {...elementos} />
        ))}
      </div>
    </div>
  )
}

export function Caja({ nombre, precio, imageurl, id_product }: ProductoRes): JSX.Element {
  return (
    <div className="caja">
      <img src={imageurl} alt={nombre} />
      <h3>{nombre}</h3>
      <span>${precio}</span>
      <Link to={`/products/especifico/${id_product}`} className='ver_todo'>Ver producto</Link>
    </div>
  );
}

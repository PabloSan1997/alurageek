import React from 'react'
import { Link } from 'react-router-dom';
import { leerCategoria } from '../Api/leerCategoria';
import '../estilos/seccion.scss'
import { cortarInformacion } from '../utilities/cortarInfo';
import { Caja } from './Caja';
import { Loading } from './Loading';

export function Seccion({ categoria }: Seccion) {
  const [productosCategoria, setProductosCategoria] = React.useState<ProductoRes[]>([]);
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    leerCategoria(categoria)
      .then(elementos => {
        setProductosCategoria(cortarInformacion(elementos));
        setLoading(false)
      })
      .catch(error => console.error(error));
  }, [categoria]);
  if(loading){
    return <Loading/>
  }
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


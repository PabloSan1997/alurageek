import React from 'react'
import { Link } from 'react-router-dom';
import { leerCategoria } from '../Api/leerCategoria';
import '../estilos/seccion.scss'
import { cortarInformacion } from '../utilities/cortarInfo';
import { Caja } from './Caja';
import { Loading } from './Loading';
import { UseContexto } from '../context';

//Se filtran productos por categoria y se renderizar un numero limitado de elementos

export function Seccion({ categoria }: Seccion) {
  const [productosCategoria, setProductosCategoria] = React.useState<ProductoRes[]>([]);
  const [loading, setLoading] = React.useState(true);
  const {limite} = UseContexto();


  React.useEffect(() => {
    leerCategoria(categoria)
      .then(elementos => {
        //Se limitan los numero de elementos
        setProductosCategoria(cortarInformacion(elementos, limite));
        setLoading(false)
      })
      .catch(error => console.error(error));
  }, [categoria, limite]);
  if(loading){
    return <Loading/>
  }
  return (
    <div className="seccion">
      <div className="titulos">
        <h2>{categoria}</h2>
        <Link to={`/products/categoria/${categoria}`}>Ver Todos ➜</Link>
      </div>
      <div className="area_pagina">
        {productosCategoria.map(elementos => (
          <Caja key={elementos.id_product} {...elementos} />
        ))}
      </div>
    </div>
  )
}


import React from 'react'
import { leerCategoria } from '../Api/leerCategoria';
import { cortarInformacion } from '../utilities/cortarInfo';
import { Caja } from './Seccion';

export function ProductosRelacionados({ categoria }: Seccion) {
    const [productosCategoria, setProductosCategoria] = React.useState<ProductoRes[]>([]);
    React.useEffect(() => {
      leerCategoria(categoria)
        .then(elementos => setProductosCategoria(cortarInformacion(elementos)))
        .catch(error => console.error(error));
    }, [categoria]);
  
    return (
      <div className="seccion">
        <div className="titulos">
          <h2>Productos Relacionados</h2>
        </div>
        <div className="area_pagina">
          {productosCategoria.map(elementos => (
            <Caja key={elementos.id_product} {...elementos} />
          ))}
        </div>
      </div>
    )
}

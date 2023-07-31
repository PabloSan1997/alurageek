import React from 'react'
import { leerCategoria } from '../Api/leerCategoria';
import { cortarInformacion } from '../utilities/cortarInfo';

import { UseContexto } from '../context';
import { Caja } from './Caja';

export function ProductosRelacionados({ categoria }: Seccion) {
    const [productosCategoria, setProductosCategoria] = React.useState<ProductoRes[]>([]);
    const {productoSeleccionado, limite} = UseContexto();

    React.useEffect(() => {
      leerCategoria(categoria)
        .then(elementos => {
          const elementosMuestra = elementos.filter(ele=>ele.id_product!==productoSeleccionado);
          setProductosCategoria(cortarInformacion(elementosMuestra, limite))
        })
        .catch(error => console.error(error));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [categoria, limite]);
  
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

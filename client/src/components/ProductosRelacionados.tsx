import React from 'react'
import { leerCategoria } from '../Api/leerCategoria';
import { cortarInformacion } from '../utilities/cortarInfo';

import { UseContexto } from '../context';
import { Caja } from './Caja';

export function ProductosRelacionados({ categoria }: Seccion) {

    const [productosCategoria, setProductosCategoria] = React.useState<ProductoRes[]>([]);

    //El producto relacionado no se debe renderizar en este componente
    //El producto seleccionado se renderiza en el componente "Descripción"
    const {productoSeleccionado, limite} = UseContexto();

    React.useEffect(() => {
      leerCategoria(categoria)
        .then(elementos => {
          //Se filtra el producto seleccionado para no renderizarlo
          const elementosMuestra = elementos.filter(ele=>ele.id_product!==productoSeleccionado);
          //Se renderizan los productos relacionados con su respectivo limite de lementos a renderizar
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

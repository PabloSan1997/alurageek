import { initialSTate, leerUnoProducto } from "../Api/leerUnoProducto";
import { Contactanos } from "../components/Contactanos";
import { EditarProducto } from "../components/EditarProducto";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { UseContexto } from "../context";

export function Editar() {
  const [producto, setProducto] = React.useState<ProductoRes>(initialSTate);
  const { id_product } = useParams();
  const {permiso} = UseContexto();
  React.useEffect(() => {
    if (id_product) {
      leerUnoProducto(id_product)
        .then(product => setProducto(product))
        .catch(error => console.error(error));
    }
  }, [id_product])
  return (
    <>
      {permiso?(<>
        <Header />
      <EditarProducto {...producto}/>
      <Contactanos />
      <Footer />
    </>):
    <Navigate to='/home'/>
    }
    </>
  )
}

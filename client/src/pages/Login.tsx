import { Navigate } from "react-router-dom";
import { Contactanos } from "../components/Contactanos";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { InicioSeccion } from "../components/InicioSeccion";
import { UseContexto } from "../context";


export function Login() {
  const { permiso } = UseContexto();

  return (
    <>
      {permiso ? <Navigate to='/products' /> : (
        <>
          <Header />
          <InicioSeccion />
          <Contactanos />
          <Footer />
        </>
      )}
    </>
  )
}

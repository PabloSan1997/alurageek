import { Navigate } from "react-router-dom";
import {Contactanos} from "../components/Contactanos";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Seccion } from "../components/Seccion";
import { BannerPromocion } from "../components/bannerPromocion";
import { UseContexto } from "../context";

const categorias = ['Consolas', 'Videojuegos', 'Figuras'];

export  function Home() {
  const {permiso} = UseContexto();
  if(permiso){
    return(
      <Navigate to='/products'/>
    );
  }
  return (
    <>
        <Header/>
        <BannerPromocion/>
        {categorias.map(elemento=>(
          <Seccion key={elemento} categoria={elemento}/>
        ))}
        <Contactanos/>
        <Footer/>
    </>
  )
}

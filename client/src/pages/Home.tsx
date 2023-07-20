import { Header } from "../components/Header";
import { Seccion } from "../components/Seccion";
import { BannerPromocion } from "../components/bannerPromocion";

const categorias = ['Consolas', 'Videojuegos', 'Figuras'];

export  function Home() {

  return (
    <>
        <Header/>
        <BannerPromocion/>
        {categorias.map(elemento=>(
          <Seccion key={elemento} categoria={elemento}/>
        ))}
    </>
  )
}

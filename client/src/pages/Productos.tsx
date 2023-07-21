import { useParams } from "react-router-dom"
import { Header } from "../components/Header";
import ContenedorCajas from "../components/ContenedorCajas";
import '../estilos/porductos.scss'

export function Productos() {
  const { categoria } = useParams();
  return (
    <>
    <Header/>
      <h2 className="tituloProductos">{!categoria ? 'Todos los productos' : categoria}</h2>
      <ContenedorCajas categoria={categoria}/>
    </>
  )
}

import { useParams } from "react-router-dom"
import { Header } from "../components/Header";
import ContenedorCajas from "../components/ContenedorCajas";


export function Productos() {
  const { categoria } = useParams();
  return (
    <>
    <Header/>
      <h2>{!categoria ? 'Todos los productos' : categoria}</h2>
      <ContenedorCajas categoria={categoria}/>
    </>
  )
}

import { useParams } from "react-router-dom"
import { Header } from "../components/Header";


export function Productos() {
  const { categoria } = useParams();
  return (
    <>
    <Header/>
      {!categoria ? 'Productos' : categoria}
    </>
  )
}

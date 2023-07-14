import { useParams } from "react-router-dom"


export  function Productos() {
    const {categoria} = useParams();
  return (
    <div>{!categoria?'Productos':categoria}</div>
  )
}


import lupita from '../asserts/lupita.svg'

export function Buscador() {
  return (
    <div className="buscador">
        <input type="text" className='buscar' placeholder='¿Qué desea buscar?'/>
        <button className='buscar-boton'><img src={lupita} alt="buscar" /></button>
    </div>
  )
}

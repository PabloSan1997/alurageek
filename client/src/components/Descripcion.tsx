import '../estilos/descripcion.scss'


export default function Descripcion({nombre, imageurl, descripcion,  precio}:ProductoRes) {
  return (
    <div className="descripcion_producto">
        <div className="parte area_imagen">
            <img src={imageurl} alt={nombre} className='imagen_descripcion'/>
        </div>
        <div className="parte">
            <h2 className='nombre'>{nombre}</h2>
            <span className='precio'>${precio}</span>
            <p className='descripcion'>{descripcion}</p>
        </div>
    </div>
  )
}

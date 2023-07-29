import React from 'react'
import { agregarApiProducto } from '../Api/agregarProducto';
import { UseContexto } from '../context';
import { inicioEstilos, initalState } from '../utilities/initialState';


export function AgregarProducto() {
  const [nuevoProducto, setNuevoProducto] = React.useState<ProductosReq>(initalState);
  const [estilos, setEstilos] = React.useState(inicioEstilos);
  const {cookie} = UseContexto();

  const agregar = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { imageurl, nombre, categoria, precio, descripcion } = nuevoProducto;
    if (!imageurl || !nombre || !categoria || isNaN(precio) || !descripcion) {
      alert('llene todos los campos');
      setEstilos({
        imageurl: !imageurl ? { background: 'rgb(245, 212, 212)' } : {},
        nombre: !nombre ? { background: 'rgb(245, 212, 212)' } : {},
        precio: isNaN(precio) || !precio ? { background: 'rgb(245, 212, 212)' } : {},
        descripcion: !descripcion ? { background: 'rgb(245, 212, 212)' } : {},
        categoria: !categoria ? { background: 'rgb(245, 212, 212)' } : {}
      });
    }else{
      setEstilos(inicioEstilos);
      agregarApiProducto(nuevoProducto, cookie.galleta)
      .then(message=>{
        alert(message.message);
        window.location.reload();
      })
      .catch(error=>console.log(error));

    }
  }

  const escribirUrl = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNuevoProducto({ ...nuevoProducto, imageurl: e.target.value });
  }
  const escribirNombre = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNuevoProducto({ ...nuevoProducto, nombre: e.target.value });
  }
  const escribirPrecio = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNuevoProducto({ ...nuevoProducto, precio: Number(e.target.value) });
  }
  const escribirCategoria = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setNuevoProducto({ ...nuevoProducto, categoria: e.target.value });
  }
  const escribirDescripcion = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNuevoProducto({ ...nuevoProducto, descripcion: e.target.value });
  }


  return (
    <div className="area_formulario">
      <form className="inicio_sección" onSubmit={agregar}>
        <h2>Agregar Producto</h2>
        <input
          type="text"
          className="entrada"
          placeholder='URL Imagen'
          onChange={escribirUrl}
          style={estilos.imageurl}
        />
        <input
          type="text"
          className="entrada"
          placeholder='Nombre'
          onChange={escribirNombre}
          style={estilos.nombre}
        />
        <input
          type="number"
          className="entrada"
          placeholder='Precio'
          onChange={escribirPrecio}
          min={0}
          max={500000}
          step={0.01}
          style={estilos.precio}
        />
        <select
          className='entrada'
          defaultValue={'Categoria'}
          onChange={escribirCategoria}
          style={estilos.categoria}
          >
          <option value="" disabled>Categoria</option>
          <option value="Consolas">Consolas</option>
          <option value="Videojuegos" >Videojuegos</option>
          <option value="Figuras" >Figuras</option>
        </select>
        <input
          type="text"
          className="entrada"
          placeholder='Descripcion'
          onChange={escribirDescripcion}
          style={estilos.descripcion}
        />
        <button
          className="boton"
          type="submit"
        >Agregar</button>
      </form>
    </div>
  )
}

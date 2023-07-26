import React from 'react'

export  function AgregarProducto() {
    const agregar = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }
  return (
    <div className="area_formulario">
    <form className="inicio_sección" onSubmit={agregar}>
      <h2>Agregar Producto</h2>
      <input
        type="text"
        className="entrada"
        placeholder='URL Imagen'
      />
      <input
        type="text"
        className="entrada"
        placeholder='Nombre'
      />
      <input
        type="number"
        className="entrada"
        placeholder='Precio'
      />
      <select  className='entrada'>
        <option value="" selected disabled>Categoria</option>
        <option value="Consolas">Consolas</option>
        <option value="Videojuegos" >Videojuegos</option>
        <option value="Figuras" >Figuras</option>
      </select>
      <input
        type="text"
        className="entrada"
        placeholder='Descripcion'
      />
      <button
        className="boton"
        type="submit"
      >Agregar</button>
    </form>
  </div>
  )
}

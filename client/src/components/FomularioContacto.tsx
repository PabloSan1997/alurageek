import React from 'react'

export function FomularioContacto() {
    const [entradas, setEntradas] = React.useState({nombre:'', mensaje:''});
    const mandar = (e:React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
    }
  return (
    <form  className="formularioContacto" onSubmit={mandar}>
        <h2 className='titulo_formulario'>Hable con nosotros</h2>
        <div className="datos_formulario">
            <label htmlFor="">Nombre</label>
            <input type="text" />
            </div>
        <div className="datos_formulario">
            <label htmlFor="">Escribe su mensaje</label>
            <textarea name="" id=""></textarea>
            </div>
        <button className='boton' type='submit'>Enviar</button>
    </form>
  )
}

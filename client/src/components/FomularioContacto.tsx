import React from 'react'
import '../estilos/formularioContacto.scss'

export function FomularioContacto() {
    //Para registar el texto de los inputs
    const [entradas, setEntradas] = React.useState({ nombre: '', mensaje: '' });

    //Registar los estilos de los elementos para la validacion
    const [estilos, setEstilo] = React.useState({
        nombre: {},
        mensaje: {}
    }
    );

    const mandar = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        //Si hay campos vacios, se cambiaran sus estilos para señalarselos al usuario
        if (!entradas.nombre || !entradas.mensaje) {
            alert('Llene todos los campos');
            const nombre = !entradas.nombre ? { color: 'red' } : {};
            const mensaje = !entradas.mensaje ? { color: 'red' } : {};
            setEstilo({ nombre, mensaje });
        } else {
            alert('Se mandó el mensaje');
            setEstilo({ nombre: {}, mensaje: {} });
        }
    }
    const setNombre = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEntradas({ ...entradas, nombre: e.target.value });
    }
    const setMensaje = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setEntradas({ ...entradas, mensaje: e.target.value });
    }
    return (
        <form className="formularioContacto" onSubmit={mandar}>
            <h2 className='titulo_formulario'>Hable con nosotros</h2>
            <div className="datos_formulario">
                <label htmlFor="nombre" style={estilos.nombre}>Nombre</label>
                <input
                    type="text"
                    onChange={setNombre}
                    value={entradas.nombre}
                    id="nombre"
                    className='entrada' />
            </div>
            <div className="datos_formulario">
                <label htmlFor="mensaje" style={estilos.mensaje}>Escribe su mensaje</label>
                <textarea
                    id="mensaje"
                    className='entrada'
                    value={entradas.mensaje}
                    onChange={setMensaje}
                ></textarea>
            </div>
            <button className='boton' type='submit'>Enviar mensaje</button>
        </form>
    )
}

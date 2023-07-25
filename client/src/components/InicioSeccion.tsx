import React from 'react'
import '../estilos/inicioSesion.scss';

export function InicioSeccion() {
  const [entradas, setEntradas] = React.useState({ email: '', contra: '' })
  const [estilos, setEstilos] = React.useState({
    email:{},
    contra:{}
  });
  const entrar = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(!entradas.contra || !entradas.email){
      const email = !entradas.email?{background:'rgb(245, 212, 212)'}:{};
      const contra = !entradas.contra?{background:'rgb(245, 212, 212)'}:{};
      setEstilos(
        {
          email,
          contra
        }
      );
    }else{
      alert('Se mando ubicacion');
      setEstilos( {
        email:{},
        contra:{}
      });
    }
  }
  const setEmail = (e:React.ChangeEvent<HTMLInputElement>) => {
    setEntradas({...entradas, email:e.target.value});
  }
  const setContra = (e:React.ChangeEvent<HTMLInputElement>) => {
    setEntradas({...entradas, contra:e.target.value});
  }
  return (
    <div className="area_formulario">
      <form className="inicio_sección" onSubmit={entrar}>
        <h2>Iniciar Sesión</h2>
        <input
          type="text"
          className="entrada"
          placeholder='Correo Electrónico'
          value={entradas.email}
          onChange={setEmail}
          style={estilos.email}
        />
        <input
          type="text"
          className="entrada"
          placeholder='Contraseña'
          value={entradas.contra}
          onChange={setContra}
          style={estilos.contra}
        />
        <button
          className="boton"
          type="submit"
        >Entrar</button>
      </form>
    </div>
  )
}

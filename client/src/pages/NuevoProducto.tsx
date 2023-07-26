
import { Header } from '../components/Header'
import { AgregarProducto } from '../components/AgregarProducto'
import { Contactanos } from '../components/Contactanos'
import { Footer } from '../components/Footer'
import { UseContexto } from '../context'
import { Navigate } from 'react-router-dom'

export  function NuevoProducto() {
    const {permiso} = UseContexto();
  return (
    <>
        {permiso?(<>
        <Header/>
        <AgregarProducto/>
        <Contactanos/>
        <Footer/>
    </>):
    <Navigate to='/home'/>
    }
    </>
  )
}

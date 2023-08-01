/// <reference types="vite/client" />

interface PropsContexto {
    children: JSX.Element | JSX.Element[]
}
interface NombreClase{
    nombreClase:string
}
//-----------Solicitudes con la api-------------
interface Solicitud {
    method:'GET' | 'DELETE',
    headers:{
        'Content-Type':'application/json',
        cabeza:string
    }
}
interface SolicitudBody {
    method:'PUT' | 'POST' | 'PATCH',
    headers:{
        'Content-Type':'application/json',
        cabeza:string
    },
    body:string
}
interface SolicitudAdmin {
    method:'PUT' | 'POST' | 'PATCH',
    headers:{
        'Content-Type':'application/json',
        cabeza:string,
        token:string
    },
    body:string
}
interface SolicitudBorrar{
    method:'DELETE',
    headers:{
        'Content-Type':'application/json',
        cabeza:string,
        token:string
    }
}
//---------------------

//-------------Solicitudes------------
interface ProductosReq{
    nombre: string,
    precio: number,
    categoria: string,
    descripcion: string,
    imageurl:string
}
interface ProductoRes {
    id_product: string,
    nombre: string,
    precio: number,
    categoria: string,
    descripcion: string,
    imageurl:string
}
type InicioSesion = {
    email:string,
    contra:string
}|{token:string}

type InicioResponse ={
    token: string,
	nombre: string,
	entrada: boolean,
    message:string,
    superUusario: boolean
}

//----------------------------------------

interface Permiso {
	token: string,
	nombre:string,
	entrada: boolean
}

interface Contexto {
    productoSeleccionado:string,
    setProductoSeleccionado:{
        (a:string):void
    },
    nombre:string,
    permiso:boolean,
    solicitudIniico:{
        (a:InicioSesion):void
    },
    removeCookie:{
        (a:string):void
    },
    cookie:{
        galleta:string
    },
    superUusario:boolean,
    limite:number
}

//------Datos Seccion-----
interface Seccion {
    categoria:string
}
//-------------------------

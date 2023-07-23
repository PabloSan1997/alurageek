/// <reference types="vite/client" />

interface PropsContexto {
    children: JSX.Element | JSX.Element[]
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
//---------------------

//-------------Solicitudes------------
interface ProductosReq{
    id_product: string,
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
//----------------------------------------

interface Permiso {
	token: string,
	nombre:string,
	entrada: boolean
}

interface Contexto {
    data:null
}

//------Datos Seccion-----
interface Seccion {
    categoria:string
}
//-------------------------
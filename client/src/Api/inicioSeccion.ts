import {  urlBaseUsuario, cabeza } from "./info";



export async function inicioSecion(inicio:InicioSesion):Promise<InicioResponse>{
    const solicitud:SolicitudBody = {
        method:'POST',
        headers:{
            'Content-Type':"application/json",
            cabeza
        },
        body:JSON.stringify(inicio)
    }
    const datos = await fetch(`${urlBaseUsuario}/iniciar`, solicitud);
    const usuarios = await datos.json() as InicioResponse;
    
    if(!datos.ok){
        if(usuarios.message){
            throw usuarios.message;
        }
        throw 'Error al obtener datos';
    }
    return usuarios;
}
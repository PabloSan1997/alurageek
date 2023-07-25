import {  urlBaseUsuario, cabeza } from "./info";



export async function inicioSecionToken(inicio:InicioSesion):Promise<InicioResponse>{
    const solicitud:SolicitudBody = {
        method:'POST',
        headers:{
            'Content-Type':"application/json",
            cabeza
        },
        body:JSON.stringify(inicio)
    }
    const datos = await fetch(`${urlBaseUsuario}/iniciarToken`, solicitud);
    if(!datos.ok){
        throw 'Error al obtener datos';
    }
    const usuarios = await datos.json() as InicioResponse;
    if(!usuarios.entrada ){
        throw 'Error al obtener datos';
    }
    return usuarios;
}
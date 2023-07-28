import { cabeza, urlBaseProductos } from "./info"

export async function borrarProducto(id:string, token:string){
    const solicitud: SolicitudBorrar={
        method:'DELETE',
        headers:{
            "Content-Type":"application/json",
            cabeza,
            token
        }
    }
    const mandar = await fetch(`${urlBaseProductos}/${id}`, solicitud);
    const message = await mandar.json() as {message:string};
    if(!mandar.ok){
        throw message.message;
    }
    return message;
}
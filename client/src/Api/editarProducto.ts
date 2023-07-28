import { cabeza, urlBaseProductos } from "./info";


export async function editarApiProducto(producto:ProductoRes, token:string){
    const solicitud: SolicitudAdmin={
        method:'PATCH',
        headers:{
            "Content-Type":"application/json",
            cabeza,
            token
        },
        body:JSON.stringify(producto)
    }
    const mandar = await fetch(urlBaseProductos, solicitud);
    const message = await mandar.json() as {message:string};
    if(!mandar.ok){
        throw message.message;
    }
    return message;
}
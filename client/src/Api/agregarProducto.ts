import { cabeza, urlBaseProductos } from "./info"



export async function agregarApiProducto(nuevoProducto:ProductosReq, token:string){
    const solicitud:SolicitudAdmin={
        method:'POST',
        headers:{
            "Content-Type":'application/json',
            cabeza,
            token
        },
        body:JSON.stringify(nuevoProducto)
    } 
    const nuevo = await fetch(urlBaseProductos, solicitud);
    const data = await nuevo.json() as {message:string};
    return data;
}
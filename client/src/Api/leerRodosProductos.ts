import { urlBaseProductos } from "./info";

export async function leerTodosLosProductos():Promise<ProductoRes[]>{
    const solicitud:Solicitud = {
        method:'GET',
        headers:{
            cabeza:'mvhola',
            'Content-Type':'application/json'
        }
    }
    const datos = await fetch(urlBaseProductos, solicitud);
    if(!datos.ok){
        throw 'Error al obtener datos';
    }
    const productos = await datos.json() as ProductoRes[];
    return productos;
}
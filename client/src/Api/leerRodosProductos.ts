import { solicitudGET, urlBaseProductos } from "./info";

export async function leerTodosLosProductos():Promise<ProductoRes[]>{
    const datos = await fetch(urlBaseProductos, solicitudGET);
    if(!datos.ok){
        throw 'Error al obtener datos';
    }
    const productos = await datos.json() as ProductoRes[];
    return productos;
}
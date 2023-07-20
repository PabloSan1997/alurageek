import { cabeza, urlBaseProductos } from "./info";


export async function leerCategoria(categoria:string):Promise<ProductoRes[]>{
    const solicitud: Solicitud = {
        method:'GET',
        headers:{
            cabeza,
            "Content-Type":"application/json"
        }
    }
    const data = await fetch(`${urlBaseProductos}/categoria/${categoria}`, solicitud);
    if(!data.ok){
        throw 'Problemas con los datos';
    }
    const porductos = await data.json() as ProductoRes[];
    return porductos;
}
import {  solicitudGET, urlBaseProductos } from "./info";


export async function leerCategoria(categoria:string):Promise<ProductoRes[]>{
   
    const data = await fetch(`${urlBaseProductos}/categoria/${categoria}`, solicitudGET);
    if(!data.ok){
        throw 'Problemas con los datos';
    }
    const porductos = await data.json() as ProductoRes[];
    return porductos;
}
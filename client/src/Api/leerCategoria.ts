

export async function leerCategoria(categoria:string):Promise<ProductoRes[]>{
    const solicitud = {
        method:'GET',
        headers:{
            cabeza:'mvhola'
        }
    }
    const data = await fetch(`https://alurageekapi.onrender.com/api/v1/productos/categoria/${categoria}`, solicitud);
    if(!data.ok){
        throw 'Problemas con los datos';
    }
    const porductos = await data.json() as ProductoRes[];
    return porductos;
}
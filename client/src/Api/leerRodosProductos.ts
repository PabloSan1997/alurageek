
export async function leerTodosLosProductos():Promise<ProductoRes[]>{
    const solicitud = {
        method:'GET',
        headers:{
            cabeza:'mvhola'
        }
    }
    const datos = await fetch('https://alurageekapi.onrender.com/api/v1/productos', solicitud);
    if(!datos.ok){
        throw 'Error al obtener datos';
    }
    const productos = await datos.json() as ProductoRes[];
    return productos;
}
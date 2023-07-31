


export function cortarInformacion(productos:ProductoRes[], limites_data:number):ProductoRes[]{
    if(productos.length<=limites_data){
        return productos;
    }
    const data = productos.splice(0, limites_data);
    return data;
}
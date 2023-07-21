
const limites_data = 6;

export function cortarInformacion(productos:ProductoRes[]):ProductoRes[]{
    if(productos.length<=limites_data){
        return productos;
    }
    const data = productos.splice(0, limites_data);
    return data;
}
import { solicitudGET, urlBaseProductos } from "./info";

export const initialSTate:ProductoRes = {
    id_product: '',
    nombre: '',
    precio: 0,
    categoria: '',
    descripcion: '',
    imageurl: ''
}

export async function  leerUnoProducto(id_product:string):Promise<ProductoRes> {
    try {
        const data = await fetch(`${urlBaseProductos}/${id_product}`, solicitudGET);
        if(!data.ok){
            return initialSTate;
        }
        const porducto = await data.json() as ProductoRes;
        return porducto;
    } catch (error) {
        return initialSTate;
    }
}
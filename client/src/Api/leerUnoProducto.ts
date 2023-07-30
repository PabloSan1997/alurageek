import { initialStateProduct } from "../utilities/initialState";
import { solicitudGET, urlBaseProductos } from "./info";



export async function  leerUnoProducto(id_product:string):Promise<ProductoRes> {
        const data = await fetch(`${urlBaseProductos}/${id_product}`, solicitudGET);
        if(!data.ok){
            return initialStateProduct;
        }
        const porducto = await data.json() as ProductoRes;
        return porducto;
}
/// <reference types="vite/client" />

interface PropsContexto {
    children: JSX.Element | JSX.Element[]
}

interface ProductoRes {
    id_product: string,
    nombre: string,
    precio: number,
    categoria: string,
    descripcion: string
}

interface ProductosReq{
    id_product: string,
    nombre: string,
    precio: number,
    categoria: string,
    descripcion: string
}

interface Contexto {
    productos:ProductoRes[]
}
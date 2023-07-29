import React from 'react'

import { UseContexto } from '../context';
import { inicioEstilos } from '../utilities/initialState';
import { editarApiProducto } from '../Api/editarProducto';

export function EditarProducto(producto: ProductoRes) {
    const [nuevoProducto, setNuevoProducto] = React.useState<ProductosReq>(producto);
    const [estilos, setEstilos] = React.useState(inicioEstilos);
    const { cookie } = UseContexto();
    React.useEffect(() => {
        setNuevoProducto(producto);
    }, [producto]);
    const agregar = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const { imageurl, nombre, categoria, precio, descripcion } = nuevoProducto;
        if (!imageurl || !nombre || !categoria || isNaN(precio) || !descripcion) {
            alert('llene todos los campos');
            setEstilos({
                imageurl: !imageurl ? { background: 'rgb(245, 212, 212)' } : {},
                nombre: !nombre ? { background: 'rgb(245, 212, 212)' } : {},
                precio: isNaN(precio) || !precio ? { background: 'rgb(245, 212, 212)' } : {},
                descripcion: !descripcion ? { background: 'rgb(245, 212, 212)' } : {},
                categoria: !categoria ? { background: 'rgb(245, 212, 212)' } : {}
            });
        } else {
            setEstilos(inicioEstilos);
            const productoActualizar: ProductoRes = {
                id_product: producto.id_product,
                ...nuevoProducto
            }
            editarApiProducto(productoActualizar, cookie.galleta)
                .then(message => {
                    alert(message.message);
                    window.location.reload();
                })
                .catch(err => alert(err));
        }
    }

    const escribirUrl = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNuevoProducto({ ...nuevoProducto, imageurl: e.target.value });
    }
    const escribirNombre = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNuevoProducto({ ...nuevoProducto, nombre: e.target.value });
    }
    const escribirPrecio = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNuevoProducto({ ...nuevoProducto, precio: Number(e.target.value) });
    }
    const escribirCategoria = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setNuevoProducto({ ...nuevoProducto, categoria: e.target.value });
    }
    const escribirDescripcion = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNuevoProducto({ ...nuevoProducto, descripcion: e.target.value });
    }


    return (
        <div className="area_formulario">
            <form className="inicio_sección" onSubmit={agregar}>
                <h2>Editar Producto</h2>
                <input
                    type="text"
                    className="entrada"
                    placeholder='URL Imagen'
                    onChange={escribirUrl}
                    style={estilos.imageurl}
                    value={nuevoProducto.imageurl}
                />
                <input
                    type="text"
                    className="entrada"
                    placeholder='Nombre'
                    onChange={escribirNombre}
                    style={estilos.nombre}
                    value={nuevoProducto.nombre}
                />
                <input
                    type="number"
                    className="entrada"
                    placeholder='Precio'
                    onChange={escribirPrecio}
                    min={0}
                    max={500000}
                    step={0.01}
                    style={estilos.precio}
                    value={nuevoProducto.precio}
                />
                <select
                    className='entrada'
                    onChange={escribirCategoria}
                    style={estilos.categoria}
                    value={nuevoProducto.categoria}
                >
                    <option value="" disabled>Categoria</option>
                    <option value="Consolas">Consolas</option>
                    <option value="Videojuegos" >Videojuegos</option>
                    <option value="Figuras" >Figuras</option>
                </select>
                <input
                    type="text"
                    className="entrada"
                    placeholder='Descripcion'
                    onChange={escribirDescripcion}
                    style={estilos.descripcion}
                    value={nuevoProducto.descripcion}
                />
                <button
                    className="boton"
                    type="submit"
                >Editar</button>
            </form>
        </div>
    )
}

import React from 'react';
import { leerTodosLosProductos } from '../Api/leerRodosProductos';

const Contexto = React.createContext({});

export function ProvedorContexto({ children }: PropsContexto) {
    const [productos, setProductos] = React.useState<ProductoRes[]>([]);
    React.useEffect(()=>{
        void (async ()=>{
            try {
                const data = await leerTodosLosProductos();
                console.log(data);
                setProductos(data);
            } catch (error) {
                console.error(error);
            }
        })();
    },[]);
    return (
        <Contexto.Provider
            value={{
                productos
            }}
        >
            {children}
        </Contexto.Provider>
    );
}

export const UseContexto = () => React.useContext(Contexto) as Contexto;
import React from 'react';


const Contexto = React.createContext({});

export function ProvedorContexto({ children }: PropsContexto) {
    const [productoSeleccionado, setProductoSeleccionado] = React.useState<string>('');
    return (
        <Contexto.Provider
            value={{
                productoSeleccionado,
                setProductoSeleccionado
            }}
        >
            {children}
        </Contexto.Provider>
    );
}

export const UseContexto = () => React.useContext(Contexto) as Contexto;
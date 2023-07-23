import React from 'react';


const Contexto = React.createContext({});

export function ProvedorContexto({ children }: PropsContexto) {
    
    return (
        <Contexto.Provider
            value={{
                
            }}
        >
            {children}
        </Contexto.Provider>
    );
}

export const UseContexto = () => React.useContext(Contexto) as Contexto;
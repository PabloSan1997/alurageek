import React from 'react';
import { inicioSecionToken } from '../Api/inicioSecionToken';
import { inicioSecion } from '../Api/inicioSeccion';
import { useCookies } from 'react-cookie';

const Contexto = React.createContext({});

export function ProvedorContexto({ children }: PropsContexto) {
    const [productoSeleccionado, setProductoSeleccionado] = React.useState<string>('');
    const [cookie, setCookie, removeCookie] = useCookies(['galleta']);
    const [inicio, setInicio] = React.useState<InicioSesion>({ token: '' });
    const [permiso, setPermiso] = React.useState(false);
    const [nombre, setNombre] = React.useState('');

    const solicitudIniico = async (ini: InicioSesion): Promise<void> => {
        try {
            const mandar = await inicioSecion(ini);
            setCookie('galleta', mandar.token, { maxAge: 100 });
        } catch (error) {
            alert(error);
        }
    }
    const galleta = cookie.galleta as string;
    console.log(permiso, nombre);
    React.useEffect(() => {
        setInicio({ token: galleta });
    }, [galleta]);
    React.useEffect(() => {
        void (async () => {
            try {
                const checar = await inicioSecionToken(inicio);
                setPermiso(checar.entrada);
                setNombre(checar.nombre);
            } catch (error) {
                setPermiso(false);
                setNombre('');
            }
        })();
    }, [inicio])
    return (
        <Contexto.Provider
            value={{
                productoSeleccionado,
                setProductoSeleccionado,
                nombre,
                permiso,
                solicitudIniico,
                removeCookie
            }}
        >
            {children}
        </Contexto.Provider>
    );
}

export const UseContexto = () => React.useContext(Contexto) as Contexto;
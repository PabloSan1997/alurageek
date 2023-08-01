import React from 'react';
import { inicioSecionToken } from '../Api/inicioSecionToken';
import { inicioSecion } from '../Api/inicioSeccion';
import { useCookies } from 'react-cookie';

const Contexto = React.createContext({});

export function ProvedorContexto({ children }: PropsContexto) {
    //Esta parte nos ayudará a saber a travez del id que producto no debe aparecer en "productos relacionados"
    const [productoSeleccionado, setProductoSeleccionado] = React.useState<string>('');

    const [cookie, setCookie, removeCookie] = useCookies(['galleta']);

    //Variable que nos ayudará a iniciar seccion automaticamente
    const [inicio, setInicio] = React.useState<InicioSesion>({ token: '' });
    
    //Variable que informa si el usuario inicio seción
    const [permiso, setPermiso] = React.useState(false);

    //Nombre del usuario
    const [nombre, setNombre] = React.useState('');

    //Si el usuario tiene poder de administrador
    const [superUusario, setSuperUusario] = React.useState(false);

    const [width, setWidth] = React.useState(window.innerWidth);

    //Limnite de porductos a renderizar en pantalla en "seccion" y "productos relacionados"
    const [limite, setLimite] = React.useState(6);
   
  //Calcular el limite de poductos a renderizar tomando como referencia el ancho de la pantalla
    React.useEffect(()=>{
      let opciones = 6;
      if(width>770){
        opciones=6;
      }
      else if(width<=770 && width>=509){
        opciones=4
      }else{
       opciones = 2;
      }
      setLimite(opciones);
      
    },[width]);

    //Calcula el tamaño de la pantalla para generar valor al limite de elementos que se renderizarán
    React.useEffect(()=>{
        window.addEventListener('resize', ()=>{
          setWidth(window.innerWidth);
        });
      },[]);

      //funcion para iniciar seccion y generar las cookies para el iniciado automatico
    const solicitudIniico = async (ini: InicioSesion): Promise<void> => {
        try {
            const mandar = await inicioSecion(ini);
            setCookie('galleta', mandar.token, { maxAge:60*60*24 });
        } catch (error) {
            alert(error);
        }
    }

    const galleta = cookie.galleta as string; //typear la cookie como string

    //iniciar seccion automaticamente con la cookie
    React.useEffect(() => {
        setInicio({ token: galleta });
    }, [galleta]);
    
    //Inicio de seccion automatico, se genera el nombre y permisos del usuario
    React.useEffect(() => {
        void (async () => {
            try {
                const checar = await inicioSecionToken(inicio);
                setPermiso(checar.entrada);
                setNombre(checar.nombre);
                setSuperUusario(checar.superUusario);
            } catch (error) {
                setPermiso(false);
                setSuperUusario(false);
                setNombre('');
            }
        })();
    }, [inicio]);

    return (
        <Contexto.Provider
            value={{
                productoSeleccionado,
                setProductoSeleccionado,
                nombre,
                permiso,
                superUusario,
                solicitudIniico,
                removeCookie,
                cookie,
                limite
            }}
        >
            {children}
        </Contexto.Provider>
    );
}

export const UseContexto = () => React.useContext(Contexto) as Contexto;
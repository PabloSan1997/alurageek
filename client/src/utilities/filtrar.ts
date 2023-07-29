
export const filtrarElementos = (nombre:string | undefined) =>{
    return (elemento:ProductoRes)=>{
        if(!nombre){
            return false
        }
        const name = nombre.toLocaleUpperCase();
        const nombreOriginal = elemento.nombre.toLocaleUpperCase();
        return nombreOriginal.includes(name);
    }
}
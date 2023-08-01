

//Funcion que usa filter() del buscador para filtrar elemento por nombre
//En la funcion se evalua el nombre que se dessea filtrar y se retorna otra funcion que se usa como callback en filter()
//Se compara la variable nombre con el nombre de cada elementos
//Si no hay nombre, se retornan todos los elementos
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
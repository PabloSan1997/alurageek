
const cabeza = 'mvhola';
const urlBaseProductos = 'https://apialurageek-46xg.onrender.com/api/v1/productos/';
const urlBaseUsuario = 'https://apialurageek-46xg.onrender.com/api/v1/usuarios'; 
const solicitudGET: Solicitud = {
    method:'GET',
    headers:{
        cabeza,
        "Content-Type":"application/json"
    }
}
export  {
    cabeza,
    urlBaseProductos,
    urlBaseUsuario,
    solicitudGET
}

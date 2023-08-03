# AluraGeek

Este proyecto es para el reto de Orecle one. Consta de dos carpetas distintas llamadas: `server` y `client`.

En la carpeta `server` contiene todo el servidor o api del proyecto que se encarga de comunicar el frontend con la base de datos, autorizar y ejecutar las diferentes peticiones http.

En la carpeta `client` estan todos los archivos que generan el frontend de la aplicación.

## Server

En la carpeta `server`  se encuentran todo lo que tenga que ver con el proceso de las solicitudes y conexion con la base de datos.

**Tecnologías:**  Express, Typeorm, PostgreSQL, JWT, [Railway](https://railway.app/ "railway.app")
**Lenguajes:** Typescript, Javascript

Este server tiene las siguientes funciones:

- Validar las solicitudes a travez de un header en especifico
- Dar permisos e identificar los inicios de sección
- Identificar si la solicitud viene de cualquier usuario o de una cuenta de administrador para validarla o rechazarla
- Obtener la lista de todos los productos
- Agregar nuevo producto a la base de datos (Modo administrador)
- Editar producto (Modo administrador)
- Eliminar producto (Modo administrador)
- Obtener productos por categoria
- Obtener producto por id
- Agregar nuevo usuario

### Solicitudes http

Base de las rutas para las solicitudes: `https://apialurageek-46xg.onrender.com/api/v1`

#### Obtener todos los productos

Con esta solicitud se optienen un arreglo con todos los productos
```http
get  /productos
```
|Parametros|Tipos|
|-|-|
|id_product|string|
|nombre|string|
|precio|number|
|categoria|string|
|imageurl|string|
|descripcion|string|

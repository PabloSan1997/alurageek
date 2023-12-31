# AluraGeek

Este proyecto es para el reto de Orecle one. Consta de dos carpetas distintas llamadas: `server` y `client`.

El reto consta de desarrollar una pagina e-commerce vista desde la perspectiva del desarrollador, por lo que debe contar con los siguientes puntos:

- Una pagina "Home" con un botón "Ver consolas" que muestre todos los productos con dicha categoría

- Poder agregar, eliminar o editar productos con solicitudes http CRUD

- Agregar un buscador funcional

- Iniciar sesión y autoidentificar usuarios y diferenciar los permisos entre cliente y administrador

- Se incluye una pagina para mostrar la descripción de un solo producto

- Se muestran todos los productos o por categoría

- La pagina debe ser responsiva a varios dispositivos (PC, Tablet, Telefonos)

- Validar los datos de los formularios

En la carpeta `server` contiene todo el servidor o api del proyecto que se encarga de comunicar el frontend con la base de datos, autorizar y ejecutar las diferentes peticiones http.

En la carpeta `client` estan todos los archivos que generan el frontend de la aplicación.

## Página

Link de la aplicación web: [AluraGeek](https://pablosan1997.github.io/alurageek/#/home "pablosan1997.github.io/alurageek")

Se usó un servicio gratis para subir la api por lo que la primera solicitud despues de un tiempo va a tardar varios minutos en ejecutarse.

## Instalación

Descarga o clona el repositorio y abre las carpetas en la consola de comandos. Ambas partes se instalan con los mismos comandos.

Instalar proyectos

`npm install`

Correr Proyecto como modo desarrollador

`npm run dev`

Construir proyectos

`npm run build`

En la carpeta `client` que contiene el fronend del proyecto, hacer deploy a github pages es con el siguiente comando

`npm run deploy`

## Server

En la carpeta `server`  se encuentran todo lo que tenga que ver con el proceso de las solicitudes y conexion con la base de datos.

**Tecnologías:**  Express, Typeorm, PostgreSQL, JWT, [Railway](https://railway.app/ "railway.app"), NodeJS
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

La base de datos esta en [Railway](https://railway.app/ "railway.app") y el server esta en [Render](https://render.com/ "render.com")

### Solicitudes http

Base de las rutas para las solicitudes: `https://apialurageek-46xg.onrender.com/api/v1`

Header de las solicitudes GET

|Parametros|Tipos|
|-|-|
|cabeza|string|
|Content-Type|application/json|

Header para todas las solicitudes hechas por un usuario con permisos de administrador

|Parametros|Tipos|
|-|-|
|cabeza|string|
|Content-Type|application/json|
|token|string|

#### Obtener todos los productos

Con esta solicitud se optienen un arreglo con todos los productos
```http
GET  /productos
```

Respuesta

|Parametros|Tipos|
|-|-|
|id_product|string|
|nombre|string|
|precio|number|
|categoria|string|
|imageurl|string|
|descripcion|string|

#### Obtener producto por id

```http
GET  /productos/:id_product
```

Respuseta

|Parametros|Tipos|
|-|-|
|id_product|string|
|nombre|string|
|precio|number|
|categoria|string|
|imageurl|string|
|descripcion|string|

#### Obtener producto por categoría

```http
GET  /productos/categoria/:categoria
```
Respuesta

|Parametros|Tipos|
|-|-|
|id_product|string|
|nombre|string|
|precio|number|
|categoria|string|
|imageurl|string|
|descripcion|string|

#### Agregar producto

```http
POST  /productos
```
Request

|Parametros|Tipos|
|-|-|
|nombre|string|
|precio|number|
|categoria|string|
|imageurl|string|
|descripcion|string|

Response

|Parametros|Tipos|
|-|-|
|message|string|

#### Editar producto
```http
PATCH  /productos
```
Request

|Parametros|Tipos|
|-|-|
|id_product|string|
|nombre|string|
|precio|number|
|categoria|string|
|imageurl|string|
|descripcion|string|

Respuesta

|Parametros|Tipos|
|-|-|
|message|string|

#### Editar producto

```http
DELETE  /productos/:id_porducts
```
Respuesta

|Parametros|Tipos|
|-|-|
|message|string|

#### Agregar usuario
```http
POST  /usuarios/agregar
```
|Parametros|Tipos|
|-|-|
|nombre|string|
|email|string|
|contra|string|
|superUusario|boolean|

Respuesta

|Parametros|Tipos|
|-|-|
|message|string|

#### Iniciar sesión

```http
POST  /usuarios/iniciar
```
Request

|Parametros|Tipos|
|-|-|
|email|string|
|contra|string|

Respuesta

|Parametros|Tipos|
|-|-|
|token|string|
|nombre|string|
|entrada|boolean|
|superUusario|boolean|

#### Iniciar sesión con token

```http
POST  /usuarios/iniciarToken
```
Request

|Parametros|Tipos|
|-|-|
|token|string|

Respuesta

|Parametros|Tipos|
|-|-|
|token|string|
|nombre|string|
|entrada|boolean|
|superUusario|boolean|

## Client

En la carpeta `client` se encuentra todo el frontend de la pagina AluraGeek.

**Tecnologías:** NodeJs, Vite, React
**Lenguajes:** Javascirpt, Typescript, HTML, CSS, Sass

### Página home

Aqui se muestra la presentacion de la pagina

[![Home](https://firebasestorage.googleapis.com/v0/b/ejemploimagenes-f0ee3.appspot.com/o/alurageek%2Fhome.PNG?alt=media&token=5c82a176-5329-4aaf-a1fd-6d5bc39bbafb "Home")](https://pablosan1997.github.io/alurageek/#/home "Home")


### Pagina categoría

En esta seccón se muestran los productos de una categoría en específico

[![Categoria](https://firebasestorage.googleapis.com/v0/b/ejemploimagenes-f0ee3.appspot.com/o/alurageek%2Fcategoria.PNG?alt=media&token=0901625e-99fe-459f-ab3c-4dda3d6e81ac "Categoria")](https://pablosan1997.github.io/alurageek/#/products/categoria/Consolas "Categoria")


### Buscador

El buscador filtra los productos que su nombre o parte de este coincida con las letras del buscador para renderizarlos en la pantalla

![Buscador](https://firebasestorage.googleapis.com/v0/b/ejemploimagenes-f0ee3.appspot.com/o/alurageek%2Fbuscador.PNG?alt=media&token=ee108f11-573b-4efb-921d-9af210c59342 "Buscador")


### Inicio de sesión

![Inicio sesión](https://firebasestorage.googleapis.com/v0/b/ejemploimagenes-f0ee3.appspot.com/o/alurageek%2Finicio.PNG?alt=media&token=8b2e8015-2f5f-4c11-be77-20c769d2bb58 "Inicio sesión")

### Agregar o editar producto

El formulario para agregar y editar producto tienen los mismos estilos, el titulo y las solicitudes son distíntas


![Agregar producto](https://firebasestorage.googleapis.com/v0/b/ejemploimagenes-f0ee3.appspot.com/o/alurageek%2Fagregar.PNG?alt=media&token=6451f6d2-0c94-4445-830b-7d5597409633 "Agregar producto")

### Pagina todos los productos visto desde la perspectiva del administrador

![Admin](https://firebasestorage.googleapis.com/v0/b/ejemploimagenes-f0ee3.appspot.com/o/alurageek%2Ftodos.PNG?alt=media&token=064a7438-b9de-41b1-a3bd-a7d40ce894f8 "Admin")

### Descripción

![Descripcion](https://firebasestorage.googleapis.com/v0/b/ejemploimagenes-f0ee3.appspot.com/o/alurageek%2Fdescripcion.PNG?alt=media&token=da4b6123-2954-4268-a6fb-bfd4a9b750c4 "Descripcion")

## Autor

- [Pablo SG](https://github.com/PabloSan1997?tab=repositories "Pablo SG")
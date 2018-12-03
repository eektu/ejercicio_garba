# ejercicio_garba

Requisitos para correr:

    1. mongo instalado
    2. configurar la ruta a Mongo en:
        /config/config.js (db_dev)
    3. ejecutar:
        -> npm i
        -> npm run start:dev

apiKey:
 
    x-api-key: que-hacemos-gon?
    
    es la key que permite que el listado vuelva completo (con los enabled: true/false)
    y habilita el acceso completo al [GET] y [PATCH] en localhost:8080/api/products/:id

Rutas del back:

    [GET]       localhost:8080/api/search?q=            Devuelve: 200
    [GET]       localhost:8080/api/products             Devuelve: 200
    [GET]       localhost:8080/api/products/:id         Devuelve: 200, 404
    [PATCH]     localhost:8080/api/products/:id         Devuelve: 200, 400, 401

Rutas del front:

    home:       localhost:8080/                         Falta maquetar/estilar
    listing:    localhost:8080/products
    detalles:   localhost:8080/products/:id             Falta estilar
    admin:      localhost:8080/admin                    Falta maquetar/estilar
    not found:  localhost:8080/<cualquier otra cosa>
    
Cosas que quedaron en el camino:
* AutoSuggest: un problema con los estilos no muestra el listado y ubica la "X" (que limpia el input) en cualquier lugar
* Panel de Admin: falta el maquetado/estilo y mitad de redux. Desde donde habilitar/deshabilitar productos a través de la GUI

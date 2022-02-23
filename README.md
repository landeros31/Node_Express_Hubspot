API realizada con HubSpot

API CRUD realizada con Node JS y Express que permite ingresar a HubDB API con 
 @hubspot/api-client por medio de su apiKey 

 para ejecutar proyecto:

 descargar repositorio 

 abrir consola Git bash 

 ejecutar npm i ( esperar a que se instalen las dependencias)

 ejecutar npm run dev ( para ejecutar el servidor y dar funcionamiento a la API)

 abrir una nueva pestaña en el navegador y ingresar a http://localhost:3000/



 /////////////////////////////////////////////////////////////////////////////////////
 API HubSpot

Tabla Back-End Developer Test

Endpoints

http://localhost:3000 (pagina principal)

(get) http://localhost:3000/api/data-table (Data tabla Principal)

(get) http://localhost:3000/api/data-table/id (Fila Tabla)

(get) http://localhost:3000/api/draft-table (Tabla de ediciones)

(post) http://localhost:3000/api/data-table (Crear fila en la tabla )

(put) http://localhost:3000/api/data-table/id (Editar fila en la Tabla )

(delete) http://localhost:3000/api/data-table/id (Borrar fila en la Tabla )


Estructura de formato Json para utilizar en el body de Endpoints (post) (put).
{
"values": {
"name": "Sebastian",
"last_name": "Landeros",
"document_id": "123456789"
}
}





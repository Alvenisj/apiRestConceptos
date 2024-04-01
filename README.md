### Rest Api

Una API REST (Application Programming Interface representational state transfer) es un conjunto de reglas y convenciones que definen cómo se comunican dos sistemas de software. Aquí tienes una explicación detallada sobre los principales aspectos de una API REST:

### 1. Recursos:
* Los recursos son objetos o datos a los que se accede a través de la API. Por ejemplo, en una API de redes sociales, los recursos pueden ser usuarios, publicaciones, comentarios, etc.

### 2. URI (Uniform Resource Identifier):
* Cada recurso en una API REST tiene una identificación única llamada URI. Por ejemplo, https://api.example.com/users.

### 3. Métodos HTTP:
* Los métodos HTTP son verbos que indican la acción que se realizará sobre un recurso. Los principales métodos utilizados en una API REST son:
        * `GET`: Recuperar datos.
        * `POST`: Crear nuevos datos.
        * `PUT`: Actualizar datos existentes **completamente**.
        * `PATCH`: Actualizar datos existentes **parcialmente**.
        * `DELETE`: Eliminar datos.

### 4. Solicitudes y respuestas:
* Las solicitudes HTTP se envían al servidor para realizar acciones sobre los recursos. Cada solicitud incluye un método, una URI y, opcionalmente, datos adicionales en el cuerpo o parámetros de consulta.
* Las respuestas HTTP proporcionan información sobre el resultado de la solicitud. Esto puede incluir datos solicitados, códigos de estado HTTP (como 200 para éxito, 404 para recurso no encontrado, etc.) y encabezados de respuesta.

### 5. Parámetros de la solicitud:
* Los parámetros de la solicitud son datos adicionales que se envían junto con la solicitud HTTP. Pueden ser de diferentes tipos:
    * Parámetros de ruta: Se incluyen en la URI y se utilizan para identificar recursos específicos.
    * Parámetros de consulta: Se envían en la URI después del signo de interrogación (?) y se utilizan para filtrar datos o proporcionar información adicional.
    * Datos del cuerpo: Se envían en el cuerpo de la solicitud y se utilizan para enviar datos estructurados, como JSON o XML.

### 6. Formato de datos:
* JSON (JavaScript Object Notation) y XML (eXtensible Markup Language) son los formatos de datos más comunes utilizados en una API REST para enviar y recibir datos entre el cliente y el servidor.

### 7. CORS (Cross-Origin Resource Sharing):
* CORS es un mecanismo de seguridad que controla cómo se pueden solicitar recursos de un origen diferente (dominio, protocolo o puerto) en una API. Se utiliza para prevenir ataques de tipo cross-origin.

### 8. Autenticación y autorización:
* La autenticación y la autorización son procesos importantes en una API REST para garantizar que solo los usuarios autorizados puedan acceder a ciertos recursos y realizar ciertas acciones.
* Los métodos comunes de autenticación incluyen el uso de tokens de acceso, básico (HTTP Basic Authentication), OAuth, etc.

### 9. Versionado de la API:
* El versionado de la API es importante para garantizar la compatibilidad entre diferentes versiones de la API y permitir la evolución de la misma sin romper la compatibilidad con clientes existentes.

### 10. Documentación de la API:
* La documentación de la API es esencial para que los desarrolladores comprendan cómo utilizar la API y qué recursos y endpoints están disponibles. Puede incluir ejemplos de solicitudes y respuestas, descripciones de los recursos y métodos disponibles, etc.

El proyecto Rest tiene las siguientes dependencias:
*   `cors:`  "^2.8.5",
*   `dotenv:` "^16.4.5",
*   `express:` "^4.19.2"

### Para realizar las instalaciones correspondientes, se utilizan los siguientes **COMANDOS**:

```
 npm i cors
```

```
 npm i dotenv
```

```
 npm i express
 
```

### Método para Inicializar el Servidor:

```
        // Método para iniciar el servidor
        start( ) {
          
            this.app.listen( this.port, ( ) => {
                console.log(`Servidor corriendo en el puerto: ${ this.port }`);
            });
        }
```


### Repositorio Github del proyecto:

Abrir el respositorio con los archivos del proyecto
- [https://github.com/Alvenisj/apiRestConceptos](https://github.com/Alvenisj/apiRestConceptos)
import express from 'express';
import path from 'path';
import cors from 'cors';

import routes from '../routes/userRoutes.js';



// Definimos nuestra clase para el servidor
    export class Server {

        constructor( port ) {

            this.port = process.env.PORT || 8081;
            this.app = express();
            this.usuariosPath = '/api/usuarios';
            // Los middlewares de mi aplicación
            this.configureMiddlewares();
            // rutas de mi aplicación
            this.configureRoutes();
            
        }

        // Configuración de middlewares
        configureMiddlewares( ) {

            // Lectura y parse del body
            this.app.use( express.json() );

            // Configuración de mis Cors "Cross-Origin Resource Sharing"
            this.app.use( cors() );

            // Configuración para servir archivos estáticos desde la carpeta 'public'
            const publicPath = path.join( process.cwd(), 'public' );
            // console.log(publicPath)
            this.app.use( express.static( publicPath ) );

        }



         // Configuración de rutas
        configureRoutes( ) {
                
            this.app.use( this.usuariosPath, routes );

        }

         // Método para iniciar el servidor
        start( ) {
          
            this.app.listen( this.port, ( ) => {
                console.log(`Servidor corriendo en el puerto: ${ this.port }`);
            });
        }



    }
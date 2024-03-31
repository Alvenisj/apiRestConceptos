import dotenv from 'dotenv';
dotenv.config();

import {  Server } from './models/server.js';



// Creamos una instancia de la clase Server
const server = new Server(  );


// Iniciamos el servidor
server.start();
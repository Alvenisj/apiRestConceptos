import express from 'express';

export const getUserController = ( req, res ) => {
    // DESESTRUCTURACIÓN DEL req.query;
    const { q, nombre = "No name", apikey, page = 1, limit= 100 } = req.query;
    // endpoint usado desde postman: http://localhost:3000/api/usuarios?q=hola&apikey=123456789&page=500&limit=100
    // respuests del controlador: {
    //     "q": "hola",
    //     "nombre": "No name",
    //     "apikey": "123456789",
    //     "page": "100",
    //     "limit": "500",
    //     "message": "Get - api Controlador"
    // }
    res.status(200).json({
        q,
        nombre,
        apikey,
        page, 
        limit,
        message: "Get - api Controlador"
    });

};


export const createUserController = ( req, res ) => {
    // DESDE POSTMAN:  body / raw / 
    // {
    //     "nombre": "Alvenis Becerra",
    //     "edad": 35
    // }

    const { nombre, edad } = req.body;

    res.status(200).json({
        nombre,
        edad,
        message: "Post - api Controlador"
    });

    // RESPUESTA: 
    // {
    //     "nombre": "Alvenis Becerra",
    //     "edad": 35,
    //     "message": "Post - api Controlador"
    // }

};


export const updatePutUserController = ( req, res ) => {
    // DESDE POSTMAN: http://localhost:3000/api/usuarios/987654321

    const { id  } = req.params;

    res.status(200).json({
        id,
        message: "Put - api Controlador"
    });

    // RESPUESTA: 
    //  {
    //     "id": "987654321",
    //     "message": "Put - api Controlador"
    // }

};


export const updatePatchUserController = ( req, res ) => {
    // DESDE POSTMAN: http://localhost:3000/api/usuarios/123456789
    const { id } = req.params;
    res.status(200).json({
        id,
        message: "Patch - api Controlador"
    });

        // RESPUESTA: 
        //  {
        //     "id": "123456789",
        //     "message": "Patch - api Controlador"
        // }


};


export const deleteUserController = ( req, res ) => {
     // DESDE POSTMAN: http://localhost:3000/api/usuarios/123456789
    const { id } = req.params;
    res.status(200).json({
        id,
        message: "Delete - api Controlador"
    });
    // RESPUESTA: 
    // {
    //     "id": "123456789",
    //     "message": "Delete - api Controlador"
    // }

};



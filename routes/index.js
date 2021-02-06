const express = require('express');
const router = express.Router();

//importar controlador para poder acceder a sus funciones
const proyectosController = require ('../controllers/proyectosController');

//se exporta la funcion cuando se accede a x ruta
module.exports = function(){

    //si se accede al home '/' se ejecuta la funcion dentro del controlador
    router.get('/', proyectosController.proyectosHome );
    router.get('/2', proyectosController.proyectosHome2);
    return router;
}


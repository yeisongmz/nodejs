const { Router } = require('express');
const express = require('express');


const routes = require('./routes');


//const path = require('path');
//path requerido para pug


//crear una app de express
const app = express();

//donde cargar los archivos estaticos
app.use(express.static('public'));

//habilitar pug
//app.set('view engine', 'pug');

//añadir carpeta de las vistas, decirle donde va encontrar las vistas, a pug
//app.set('views', path.join(__dirname, './views'));

app.use('/', routes());

app.listen(3000);


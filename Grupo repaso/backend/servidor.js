const express = require ('express');
const app = express();

const miconexion = require('./conexion');

app.listen(1111, function(){
    console.log('Servidor funcionando en el link: http://127.0.0.1:1111');
});

app.get('/', function(req,res){
    res.send('<h1>Hola Mundo...</h1>');
});

//Importar rutas
const rutas = require ('./rutas/router');
app.use('/api',rutas);
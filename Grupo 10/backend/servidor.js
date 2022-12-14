//Establezco la conexión
const express = require('express');
const app = express();

const miconexion = require('./conexion');

//Importo las rutas
const rutas = require('./routes/routers');
app.use('/api',rutas);

//Petición de prueba con metodo GET
app.get('/', (req,res) => {
    res.send("Servidor Backend corriendo OK! <button>Aceptar</button>");
})

//Inicializar servidor en puerto 5000
app.listen(5000,function()
{
    console.log("Mi servidor funciona en el puerto 5000 - http://localhost:5000");
})

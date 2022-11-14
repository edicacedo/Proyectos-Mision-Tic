const mongoose = require ('mongoose');
mongoose.connect('mongodb://localhost:27017/grupo9');
const miconexion = mongoose.connection;

miconexion.on('connected', ()=>{
    console.log("Conexión exitosa a la base de datos");
});

miconexion.on('error',()=>{
    console.log("Error al conectarse a la base de datos");
});
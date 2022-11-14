const mongoose = require('mongoose');

const esquema = mongoose.Schema;

const esquemaUsuario = new esquema({
    id : String,
    nombres:String,
    apellidos: String,
    edad : Number,
    residencia: String
})

const modeloUsuario = mongoose.model('usuarios', esquemaUsuario);

module.exports = modeloUsuario;
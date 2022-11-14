const mongoose = require('mongoose');

const miesquema = mongoose.Schema;

const esquemaCliente = new miesquema({
    id : String,
    id_tipodocumento : String,
    nombre : String,
    telefono : String,
    direccion : String,
    email : String
})

const modeloCliente = mongoose.model('clientes',esquemaCliente);

module.exports = modeloCliente;

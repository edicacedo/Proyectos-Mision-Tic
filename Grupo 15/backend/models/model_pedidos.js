const mongoose = require('mongoose');

const miesquema = mongoose.Schema;

const esquemaPedido = new miesquema({
    id : String,
    id_cliente : String,
    fecha : String,
    valor : Number,
    activo : Boolean
})

const modeloPedido = mongoose.model('pedidos',esquemaPedido);

module.exports = modeloPedido;

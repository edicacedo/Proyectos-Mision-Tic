const express = require('express');
const router = express.Router();
const modeloPedido = require('../models/model_pedidos');

router.get('/listar', (req, res) => {
    modeloPedido.find({}, function(docs,err)
    {
        if(!err)
        {
            res.send(docs);
        }
        else
        {
            res.send(err);
        }
    })
});

//Agregar


//editar


//Borrar


module.exports = router;
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
router.post('/agregar', (req, res)=>{
    const nuevoPedido = new modeloPedido({
        id: req.body.id,
        id_cliente: req.body.id_cliente,
        fecha: req.body.fecha,
        valor: req.body.valor,
        activo: req.body.activo
    });
    nuevoPedido.save(function(err){
        if(!err)
        {
            res.send('Se registro la información con éxito.');
        }
        else
        {
            res.send(err.stack);
        }
    })
})

//editar

//Borrar


module.exports = router;
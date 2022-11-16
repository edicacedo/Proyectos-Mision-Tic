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
router.post('/agregar',(req, res)=>{
    const nuevoPedido = new modeloPedido({
        id:req.body.id,
        id_cliente:req.body.id_cliente,
        fecha: req.body.fecha,
        valor:req.body.valor,
        activo: req.body.activo
    });
    nuevoPedido.save(function(err){
        if(!err)
        {
            res.send('Registro almacenado correctamente.');
        }
        else
        {
            res.send('No es posible registrar el pedido.');
        }
    })
});
//editar
router.post('/editar/:id',(req, res)=>{
    modeloPedido.findOneAndUpdate({id:req.params.id},
        {
            fecha:req.body.fecha,
            valor:req.body.valor,
            activo:req.body.activo
        },(err)=>{
            if(!err)
            {
                res.send('Datos actualizados correctamente.');
            }
            else
            {
                res.send('No fue posible tramitar su solicitud');
            }
        });
});
//Borrar
router.delete('/borrar/:id',(req,res)=>{
    modeloPedido.findOneAndDelete({id:req.params.id},
    (err)=>{
        if(!err)
        { 
            res.send('Registro borrado con éxito.');
        }
        else
        {
            res.send('No fue posible borrar el registro.');
        }
    });
});

module.exports = router;
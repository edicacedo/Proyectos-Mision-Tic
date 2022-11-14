const express = require ('express');
const router = express.Router();
const modeloUsuario = require ('../modelo/modelo_usuarios');

//Crear una ruta para mostrar información

router.get('/mostrar', (req, res)=>{
    modeloUsuario.find({}, (docs, err)=>{
        if(!err)
        {
            res.send(docs);
        }
        else
        {
            res.send(err.stack);
        }
    })

    //Crear ruta para agregar datos 

});
module.exports=router;
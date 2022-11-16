const express = require('express');
const router = express.Router();
const controladorPedidos = require('../controllers/controller_pedidos');

router.get("/listar",controladorPedidos);
router.post('/agregar',controladorPedidos);
router.post('/editar/:id',controladorPedidos);
router.delete('/eliminar/:id',controladorPedidos);
 
module.exports = router;

const express = require('express');
const router = express.Router();

const rutaClientes = require('./router_clientes');
router.use("/clientes",rutaClientes);

module.exports = router;

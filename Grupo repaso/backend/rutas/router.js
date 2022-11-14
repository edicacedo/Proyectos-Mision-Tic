const express = require ('express');

const router = express.Router();

const rutaUsuarios = require('./ruta_usuarios');

router.use('/usuarios',rutaUsuarios);

module.exports = router;
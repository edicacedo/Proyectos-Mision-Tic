const express = require ('express');
const router = express.Router();
const controladorUsuarios = require ('../controlador/controlador_usuarios');

router.get('/mostrar', controladorUsuarios);
/*
router.post('/agregar', controladorUsuarios);
router.post('/actualizar', controladorUsuarios);
router.delete('/borrar', controladorUsuarios);
*/
module.exports = router;
// ENRUTADOR PRODUCTS
// RUTA ------> CONTROLADOR -------> VISTA
// const path = require('path');

const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');

router.get('/detalle', productsController.detalle);
router.get('/carrito', productsController.carrito);
router.get('/nuevo', productsController.nuevo);
router.get('/', productsController.root);
//router.get('/:id', productsController.detail);

module.exports = router;
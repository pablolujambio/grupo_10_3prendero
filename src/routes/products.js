// ENRUTADOR PRODUCTS

// RUTA ------> CONTROLADOR -------> VISTA

// const path = require('path');
const productsController = require('../controllers/productsController');

const express = require('express');
const router = express.Router()

router.get('/detalle', productsController.detalle);

router.get('/carrito', productsController.carrito);

router.get('/nuevo', productsController.nuevo);

module.exports = router;


const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');
const authMiddleware = require('../middlewares/authMiddleware');
const guestMiddleware = require('../middlewares/guestMiddleware');

router.get('/detalle', productsController.detalle);
router.get('/carrito',authMiddleware, productsController.carrito);
router.get('/nuevo', productsController.nuevo);
router.get('/', productsController.root);


module.exports = router;
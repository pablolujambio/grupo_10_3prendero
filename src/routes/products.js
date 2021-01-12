

const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');
const authMiddleware = require('../middlewares/authMiddleware');
const guestMiddleware = require('../middlewares/guestMiddleware');


router.get('/carrito',authMiddleware, productsController.carrito);
router.get('/nuevo', productsController.nuevo);
router.get('/', productsController.root);
router.get('/all', productsController.all);
router.get('/:id?', productsController.detalle);


module.exports = router;
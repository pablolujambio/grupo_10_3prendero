

const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');
const authMiddleware = require('../middlewares/authMiddleware');
const guestMiddleware = require('../middlewares/guestMiddleware');
const multer = require('multer');
const path = require('path');
const productvalidator = require("../validations/productValidation");


var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../../public/uploads/products'));
    },
    filename: function (req, file, cb) {
        cb(null, req.body.descripcion + path.extname(file.originalname))
    }
})
var upload = multer({ storage: storage })


router.get('/carrito',authMiddleware, productsController.carrito);
router.get('/nuevo', productsController.nuevo);
router.get('/', productsController.root);
router.get('/all', productsController.all);
router.get('/detail/:id', productsController.detalle);
router.get('/EditProduct/:id', productsController.edit);    // Vista del Formulario de edición de productos
router.post('/EditProduct/:id', upload.single('image'),productvalidator, productsController.update); 
router.delete('/delete', productsController.delete); 
router.get('/search',productsController.search);


module.exports = router;
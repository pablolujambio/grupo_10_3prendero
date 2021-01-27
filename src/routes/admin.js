const express = require('express');
const multer = require('multer');
const path = require('path');

const router = express.Router();
const productsController = require('../controllers/productsController');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../../public/uploads/products'));
    },
    filename: function (req, file, cb) {
        cb(null, req.body.descripcion + path.extname(file.originalname))
    }
})

var upload = multer({ storage: storage })

router.get('/products/create', productsController.create);
router.post('/products/register', upload.single('image'), productsController.save);
//router.get('/products/:id', productsController.adminDetail);
//router.delete('/products/:id', (req, res) => res.send('borraste un producto'))
 


module.exports = router;

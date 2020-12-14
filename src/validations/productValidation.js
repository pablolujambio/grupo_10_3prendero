const { check } = require('express-validator');

module.exports = [
    check('nombreProducto')
        .isLength({ min: 4, max: 100 })
        .withMessage('Debes ingresar el nombre del producto'),
    check('description')
        .isLength({ min: 10 })
        .withMessage('Debes ingresar la descripción del producto'),
    check('precio')
        .isLength({ min: 1 })
        .isNumeric()
        .withMessage('Debes ingresar un precio del producto'),
    check('sexo')
        .notEmpty()
        .withMessage('Debes seleccionar un valor'),
]

//poner un check de imagen
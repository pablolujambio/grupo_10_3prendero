const {check, validationResult, body} = require("express-validator");

module.exports = [
    check('nombrep')
            .notEmpty().withMessage('El campo no puede estar vacío')
            .isLength({min:5}) 
        .withMessage('Debes tener al menos 5 caracteres'),
    check('descripcion')
        .notEmpty().withMessage('El campo no puede estar vacío')
        .isLength({ min: 20 })
        .withMessage('Debes tener al menos 20 caracteres'),
]


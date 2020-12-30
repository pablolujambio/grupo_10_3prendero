const { check } = require('express-validator');

module.exports = [
    check("username")
        .isLength({min:2, max:20}) 
        .withMessage("debe tener como minimo 2 caracteres y como maximo 20"),
    check('password')
        .isLength({ min: 6, max: 15 })
        .withMessage('La contraseña debe tener como mínimo 6 caracteres y como máximo 15')
]
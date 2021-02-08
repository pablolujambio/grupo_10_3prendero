const { check } = require('express-validator');

module.exports = [
    check("username")
    .notEmpty().withMessage('El campo no puede estar vacío')
    ,
    
    check('password')
    .notEmpty().withMessage('El campo no puede estar vacío')
    
]
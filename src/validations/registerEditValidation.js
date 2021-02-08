const {check, validationResult, body} = require("express-validator");


module.exports = [
    check("nombre")
        .notEmpty().withMessage('El campo no puede estar vacío')
        .isLength({min:2, max:20}) 
        .withMessage("debe tener como minimo 2 caracteres y como maximo 20"),
    check("apellido")
        .notEmpty().withMessage('El campo no puede estar vacío')
        .isLength({min:2, max:20}) 
        .withMessage("debe tener como minimo 2 caracteres y como maximo 20"),
    check("username")
        .notEmpty().withMessage('El campo no puede estar vacío')
        .isLength({min:2, max:20}) 
        .withMessage("debe tener como minimo 2 caracteres y como maximo 20"),
        
   
 ]
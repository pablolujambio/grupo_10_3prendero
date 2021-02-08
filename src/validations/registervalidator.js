const {check, validationResult, body} = require("express-validator");
let db = require('../database/models');

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
        
    check("email")
        .notEmpty().withMessage('El campo no puede estar vacío')
        .isEmail().withMessage("Debes ingresar email válido")
        .custom(async function(email) {
            let registro = await db.usuarios.findOne({ where : { email: email } });
            if (registro) {
                throw new Error ("El email ya está registrado")
            }
        }),
   
    check("password")
             .notEmpty().withMessage('El campo no puede estar vacío')
        .isLength({min:6, max:15}) 
        .withMessage("la contraseña debe tener un minimo de 6 caracteres y un maximo de 15 caracteres"),
    check("repassword")
        .notEmpty().withMessage('El campo no puede estar vacío')
        .isLength({ min:6, max:15 }).withMessage("la contraseña debe tener un minimo de 6 caracteres y un maximo de 15 caracteres")
        .custom(async (repassword, {req}) => { 
            let password = req.body.password;
            if(password !== repassword){ 
              throw new Error('Las contraseñas deben ser las mismas') 
            }
        }), 
    check('politica')
        .notEmpty().withMessage('Debé aceptar los términos y condiciones')
 ]
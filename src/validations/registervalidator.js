const {check, validationResult, body} = require("express-validator");
 module.exports = [
     check("username").isLength({min:2, max:20}) .withMessage("debe tener como minimo 2 caracteres y como maximo 20"),
     check("email").isEmail() .withMessage("debe ingresar email valido"),
     check("password").isLength({min:6, max:15}) .withMessage("la contraseña debe tener un minimo de 6 caracteres y un maximo de 15 caracteres"),
     check("repassword").isLength({min:6, max:15}) .withMessage("la contraseña debe tener un minimo de 6 caracteres y un maximo de 15 caracteres"),
 ]
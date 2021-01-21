

let usuarios = require('../database/models');

function mantenerselogueado( req,res,next){
     if (req.cookies.remember != undefined){
               for (let i = 0; i < usuarios.length; i++) {
               if (usuarios[i].username == req.cookies.remember){
                    req.session.datosusuario= usuarios[i];
               } 
               }
               res.locals.datosusuario = req.session.datosusuario;
     }
     next();
}


module.exports = mantenerselogueado
const path = require ('path');
const fs = require ('fs')

let usuarios = JSON.parse(fs.readFileSync(path.join(__dirname, '../database/users.json'), 'utf8'))

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
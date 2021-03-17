let db = require('../database/models');





 
function mantenerselogueado( req,res,next){

     

     if (req.cookies.remember != undefined && req.session.datosusuario == undefined) {
          db.usuarios.findAll()
          .then(function(usuarios){
             for(let i = 0; i < usuarios.length; i++){
               
  
              if (usuarios[i].username === req.cookies.remember) {
                   usuarioALoguearse = usuarios[i];
                   
              }
             
         
  
       
          } 
          
          req.session.datosusuario = usuarioALoguearse;
     })
     }
     next();
     }
module.exports = mantenerselogueado




const fs =require("fs");

const bcrypt = require("bcrypt")
const  {validationResult} = require("express-validator");
const session = require("express-session");


 let db = require('../database/models');

 
module.exports = {
    register: function(req, res) {
        res.render('users/register')
    },
    save: function(req,res){

        let errors = validationResult(req);                                 
        if(errors.isEmpty()) {                                                 
       
                 db.usuarios.create ({
                    nombre: req.body.nombre,
                    apellido: req.body.apellido,
                    username: req.body.username,
                    email: req.body.email,
                    password: bcrypt.hashSync(req.body.password, 10),
                    repassword: req.body.repassword,
                    date: req.body.date,
                    image: req.file.filename
                })
                
                .then(function() {
                    res.redirect("/users/login")
                })
                
             } else {
            return res.render('users/register', { errors: errors.mapped() })    
             }
        
    },
  
    login: function(req, res) {
        res.render('users/login')
    },
    logout: function(req ,res) {

      
        cookie = req.cookies;
       for (var prop in cookie) {
           if (!cookie.hasOwnProperty(prop)) {
               continue;
           }    
           res.cookie(prop, '', {expires: new Date(0)});
       }
      
        res.redirect("/")
    },
  

    logged: function(req, res){
       
        let errors = validationResult(req);
        if (errors.isEmpty()) {
        
        let usernameusuario = req.body.username;
        let passusuario = req.body.password;
        let remember = req.body.remember;
      
        let usuarioALoguearse;
        
        db.usuarios.findAll()
        .then(function(usuarios){
           for(let i = 0; i < usuarios.length; i++){
             

            if (usuarios[i].username === usernameusuario && bcrypt.compareSync(passusuario, usuarios[i].password)) {
                 usuarioALoguearse = usuarios[i];
                 
            }
           }
       

        if (usuarioALoguearse == undefined) {
            return res.send('Datos incorrectos');
        } 
        
        req.session.datosusuario = usuarioALoguearse;
        
        if (remember != undefined) {
            res.cookie('remember', usuarioALoguearse.username,  
            { maxAge: 600000000 })
           
            
        }
        
        
          
       
        
     return res.redirect("/users/profile/" + usuarioALoguearse.id);})
    } else{

        
        return res.render('users/login', { errors: errors.mapped() })
     
    }
    },
    profile: function (req, res) {
        
        db.usuarios.findByPk(req.params.id)
        .then(function(usuario) { 
             
            res.render("users/profile", {
                usuario: usuario 
                
               
            })
        })
   
    },

    edit: function(req, res){

        db.usuarios.findByPk(req.params.id)
     
            .then(function(usuarios){
                
                            return res.render('users/RegisterEdit', {usuarios:usuarios} )
                    })
 },
 update: function(req, res) {
    let errors = validationResult(req);                                 
    if(errors.isEmpty()) {             
    db.usuarios.update({
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        username: req.body.username,
        email: req.body.email,
        date: req.body.date,
        image: req.file.filename
    },{
        where:{
            id:req.params.id
        }
    });
    
    res.redirect("/users/profile/" + req.params.id)
} else {
    db.usuarios.findByPk(req.params.id)
     
            .then(function(usuarios){
                
                            return res.render('users/RegisterEdit', {usuarios:usuarios , errors: errors.mapped()} )
                    })
   
 }

  
}

}
   
    

  
    

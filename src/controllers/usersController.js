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
    console.log(req.body);
                 db.usuarios.create ({
                   
                    username: req.body.username,
                    email: req.body.email,
                    password: req.body.password,
                    repassword: req.body.repassword,
                    date: req.body.date,
                    image: req.body.image
                })
                
                .then(function() {
                    res.redirect("/")
                })
                
        
        
    },
  
    login: function(req, res) {
        res.render('users/login')
    },
    logout: function(req ,res) {

        console.log(req.cookies)
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
        let usernameusuario = req.body.username;
        let passusuario = req.body.password;
        let remember = req.body.remember;

        let usuarioALoguearse;

        usuarios.forEach(user => {
            if (user.username === usernameusuario && bcrypt.compareSync(passusuario, user.password)) {
                 usuarioALoguearse = user;
            }
        });

        if (usuarioALoguearse == undefined) {
            return res.send('Datos incorrectos');
        } 

        req.session.datosusuario = usuarioALoguearse;

        
        if (remember != undefined) {
            res.cookie('remember', usuarioALoguearse.username, { maxAge: 600000000 });
        }
        
     
        return res.redirect('/users/profile');

      
        }
    ,
    profile: function (req, res) {
        return res.render('users/profile');
    }

}
   
    

  
    

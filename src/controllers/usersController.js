const fs =require("fs");
const path = require("path");
const bcrypt = require("bcrypt")
const  {validationResult} = require("express-validator");
const session = require("express-session");

 let usuarios = fs.readFileSync(path.join(__dirname, "../database/users.json"), "utf8");
 usuarios = JSON.parse(usuarios)

 let ultimoid = 0;
 for (let i = 0; i < usuarios.length; i++){
     if(ultimoid < usuarios[i].id){
         if(ultimoid < usuarios[i].id){
             ultimoid = usuarios[i].id
         }
     }
 }
module.exports = {
    register: function(req, res) {
        res.render('users/register')
    },
    save: function(req,res){
        let errors = validationResult(req);
        if(errors.isEmpty()){
                let nuevousuario = {
                    id: ultimoid + 1,
                    username: req.body.username,
                    email: req.body.email,
                    password: bcrypt.hashSync(req.body.password, 12),
                    repassword: bcrypt.hashSync(req.body.repassword, 12),
                    date: req.body.date,
                    image: req.file.filename
                }
                usuarios.push(nuevousuario);
                fs.writeFileSync(path.join(__dirname, "../database/users.json"), JSON.stringify(usuarios, null, 4))
                res.redirect("/users/login")
        }else{
        res.send(errors).mapped()
        }
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
   
    

  
    

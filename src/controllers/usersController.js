const fs =require("fs");
const path = require("path");
const bcrypt = require("bcrypt")
const  {validationResult} = require("express-validator")

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
    checklogin: function (req, res){
      
        let usernameusuario = req.body.username;
        let passusuario = req.body.password;
        console.log(usernameusuario)
        console.log(usuarios)

        for(let i = 0; i < usuarios.length; i++) {
            
           if(usernameusuario == usuarios[i].username){
            
               if(bcrypt.compareSync(passusuario, usuarios[i].password)){
             
                   req.session.datosusuario = {
                       username: usuarios[i].username
                   };
                   res.send(req.session)
               }else{
              
                res.send("los datos ingresados no son correctos")}
            

                
            }else{
              
                res.send("los datos ingresados no son correctos")}
            

            }
        }
        
    
    }
const fs = require('fs');
const path = require('path');
const { validationResult } = require('express-validator');

let db = require('../database/models');

//let productos = fs.readFileSync(path.join(__dirname, '../database/products.json'), 'utf8');
//productos = JSON.parse(productos)

//let ultimoId = 0;
//for (let i = 0; i < productos.length; i++) {
    //if (ultimoId < productos[i].id) {
       // ultimoId = productos[i].id
    //}
//}

module.exports = {
    root: (req, res) => {
        return res.render('products/index', { productos });
    },
   
    create: (req, res) => {
        db.talle.findAll()
        .then(function(talle){
            db.sexo.findAll()
            .then(function(sexo){
                db.tipo.findAll()
                .then(function(tipo){

                    return res.render('products/newProduct', {sexo : sexo,  talle : talle,  tipo : tipo} )
            })
        })
           
    })
    },
    save: (req, res) => {
        console.log(req.body)
        

        db.productos.create({
                id_tipo: req.body.id_tipo,
                id_sexo: req.body.id_sexo,
                nombreProducto: req.body.nombre_producto,
                descripcion: req.body.descripcion,
                id_talle: req.body.id_talle,
                precio: req.body.precio,
                image:  req.file.filename
               
            })
            .then(function() {
                res.redirect("/")
            })
       
        
    },
    carrito: function(req, res) {
    console.log("hola")
        return res.render('products/productCart');
    },

    detalle: function(req, res) { 
        for (let i = 0; i < productos.length; i++) {
            if(req.params.id == productos[i].id){     
                return res.render('products/productDetail', { producto : productos[i]});
            }
        }  
    },

    all: function(req, res) {
        return res.render('products/Allproducts', { productos : productos})
    },

   
    nuevo: function(req, res) { 
         
        return res.render('products/newProduct')
    }
}
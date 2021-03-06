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
      
        let errors = validationResult(req);                                 
        if(errors.isEmpty()) {                                                 
       

        db.productos.create({
                id_tipo: req.body.id_tipo,
                id_sexo: req.body.id_sexo,
                nombreProducto: req.body.nombrep,
                descripcion: req.body.descripcion,
                id_talle: req.body.id_talle,
                precio: req.body.precio,
                image:  req.file.filename
               
            })
            .then(function() {
                res.redirect("/")
            })

        }else{
            db.talle.findAll()
            .then(function(talle){
                db.sexo.findAll()
                .then(function(sexo){
                    db.tipo.findAll()
                    .then(function(tipo){
    
                        return res.render('products/newProduct', {sexo : sexo,  talle : talle,  tipo : tipo, errors: errors.mapped() } )
                })
            })
               
        })
    }
    },
    carrito: function(req, res) {
 
        return res.render('products/productCart');
    },

    detalle: function(req, res) { 
        db.productos.findByPk(req.params.id)
        .then(function(productos) {
            return res.render('products/detail', { productos: productos })
        })
    },

    all: function(req, res) {
        db.productos.findAll()
        .then(function(productos){
        return res.render("products/Allproducts", { productos : productos})
        })
    },

    men: function(req, res) {
        db.productos.findAll()
        .then(function(productos){
            
         
        return res.render("products/menproducts", { productos : productos})
       
        })
  
    },
    women: function(req, res) {
        db.productos.findAll()
        .then(function(productos){
            
        
        return res.render("products/womenproducts", { productos : productos})
       
        })
  
    },
    kids: function(req, res) {
        db.productos.findAll()
        .then(function(productos){
            
        
        return res.render("products/kidsproducts", { productos : productos})
       
        })
  
    },


   
    nuevo: function(req, res) { 
         
        return res.render('products/newProduct')
    },

    edit: function(req, res){

        db.productos.findByPk(req.params.id)
     
            .then(function(productos){
                db.talle.findAll()
                .then(function(talle){
                    db.sexo.findAll()
                    .then(function(sexo){
                        db.tipo.findAll()
                        .then(function(tipo){
        
                            return res.render('products/EditProduct', {productos:productos, sexo : sexo,  talle : talle,  tipo : tipo} )
                    })
                })
                   
            })
        })
    },

    update: function(req, res) {
        let errors = validationResult(req);                                 
        if(errors.isEmpty()) {          
        db.productos.update({
                id_tipo: req.body.id_tipo,
                id_sexo: req.body.id_sexo,
                nombreProducto: req.body.nombrep,
                descripcion: req.body.descripcion,
                id_talle: req.body.id_talle,
                precio: req.body.precio,
                image:  req.file.filename
               
        },{
            where:{
                id:req.params.id
            }
        });
        
        res.redirect('/products/all')

    }else{
        db.talle.findAll()
        .then(function(talle){
            db.sexo.findAll()
            .then(function(sexo){
                db.tipo.findAll()
                .then(function(tipo){

                    return res.render('EditProduct', {sexo : sexo,  talle : talle,  tipo : tipo, errors: errors.mapped() } )
            })
        })
           
    })
}
    },
    delete: function(req, res) {

     db.productos.destroy({
        where:{
            id: req.body.id
        }
    })
    res.redirect('/products/all');
    
    
    },
    search: function(req, res){
        db.productos.findAll({
            where:{
                nombreProducto:{
                    [db.Sequelize.Op.like]:`%${req.query.search}%`
                }
            }
        })
        .then(function(resultado){
            res.render('products/search',{
                queryString:req.query.search,
                productos:resultado
            })
        })
            .catch(function(e){
                console.log(e)
            
        })

    }
   
}
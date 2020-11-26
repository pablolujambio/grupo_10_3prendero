const fs = require('fs')
const path = require('path')

module.exports = {
    detalle: function(req, res) {

        
        return res.render('products/productDetail')
        
        
        
    },
    carrito: function(req, res) {

        
        return res.render('products/productCart')
    },
    nuevo: function(req, res) {

        
        return res.render('products/newProduct')
    }


   

}
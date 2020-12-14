const fs = require('fs');
const path = require('path');
const { validationResult } = require('express-validator');

let productos = fs.readFileSync(path.join(__dirname, '../database/products.json'), 'utf8');
productos = JSON.parse(productos)

let ultimoId = 0;
for (let i = 0; i < productos.length; i++) {
    if (ultimoId < productos[i].id) {
        ultimoId = productos[i].id
    }
}

module.exports = {
    root: (req, res) => {
        return res.render('products/index', { productos });
    },
    //detail: (req, res) => {
    //    let producto = productos.find((producto) => {
    //        return producto.id == req.params.id;
    //    })
    //    return res.send(producto);
    //},
    create: (req, res) => {
        return res.render('products/newProduct');
    },
    store: (req, res) => {
        let errors = validationResult(req);
        if (errors.isEmpty()) {
            let product = {
                id: ultimoId +1,
                type: req.body.type,
                sexo: req.body.sexo,
                nombreProducto: req.body.nombreProducto,
                descripcion: req.body.descripcion,
                talles: req.body.talles,
                precio: req.body.precio,
                image: req.files[0].filename
            }
            productos.push(product);
            fs.writeFileSync(path.join(__dirname, '../database/products.json'), JSON.stringify(productos, null, 4))
        }
        return res.send(productos);
    },
    //adminDetail: (req, res) => {
    //    let producto = productos.find((producto) => {
    //        return producto.id == req.params.id;
    //    })
    //    return res.render('products/detail', {producto});
    //}


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
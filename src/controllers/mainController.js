const path = require('path');
const fs = require('fs')

let nosotros = JSON.parse(fs.readFileSync(path.join(__dirname, '../database/nosotros.json'), 'utf8'))
let productos = fs.readFileSync(path.join(__dirname, '../database/products.json'), 'utf8');
productos = JSON.parse(productos)

let db = require('../database/models');

// RUTA ------> CONTROLADOR -------> VISTA
let mainController = {
    index: function(req, res) {
        db.productos.findAll({
            include:[{association:"talle"},{association:"tipos"},{association:"sexo"}]
                
  
        })
        .then(function(productos) {
           
                return res.render('index', {
                productos: productos
            })
        })
    },
    nosotros: function (req, res) {
        return res.render('nosotros', { 
            view: '/nosotros',
            nosotros
        })
    }
};

module.exports = mainController;
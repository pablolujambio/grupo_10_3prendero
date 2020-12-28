const path = require('path');
const fs = require('fs')

let nosotros = JSON.parse(fs.readFileSync(path.join(__dirname, '../database/nosotros.json'), 'utf8'))

// RUTA ------> CONTROLADOR -------> VISTA
let mainController = {
    index: function(req, res) {
        return res.render('index', { mensaje: "Bienvenidos a nuestra página..." })
    },
    nosotros: function (req, res) {
        return res.render('nosotros', { 
            view: '/nosotros',
            nosotros
        })
    }
};

module.exports = mainController;
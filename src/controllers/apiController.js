let db = require('../database/models');

module.exports={
    products: function(req, res){
        db.productos.findAll()
       
    .then(function(productos){
        db.tipo.findAll()
  
        .then(function(tipos){
            let productosporcategoria = db.sequelize.query("SELECT tipos.nombre, COUNT(*) AS CANTIDAD FROM tipos INNER JOIN productos ON tipos.id = productos.id_tipo GROUP BY tipos.nombre")
            .then(function(resultado){
   
           
        
       
                    let array = []
                    for(let i=0; i<productos.length; i++){

                     array.push({
                        id: productos[i].id,
                        nombreProducto: productos[i].nombreProducto,
                        description: productos[i].descripcion,
                        detalle:  `/products/detail/${productos[i].id}`,
                        tipos: tipos[i]
                    })
                    }
                    res.status(200).json({
                        cantidad: productos.length,
                        productosporcategoria:resultado[0],
                        products: array
                     })

           
                     })

                })

             })
   
        
           
}

}
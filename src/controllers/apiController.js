let db = require('../database/models');

module.exports={
    products: function(req, res){
        db.productos.findAll({
            include: {
                all: true
            }
        })

    .then(function(productos){
  
        db.tipo.findAll()
          
        .then(function(tipos){
            let productosporcategoria = db.sequelize.query("SELECT tipos.nombre, COUNT(*) AS Cantidad FROM tipos INNER JOIN productos ON tipos.id = productos.id_tipo GROUP BY tipos.nombre")
            .then(function(resultado2){
   
           
        
       
                    let detalle = []
                    for(let i=0; i<productos.length; i++){

                     detalle.push({
                     
                        detalle:  `/products/detail/${productos[i].id}`,
                       
                    })
                    }
                    res.status(200).json({
                        cantidad: productos.length,
                        productosporcategoria:resultado2[0],
                        detalle: detalle,
                        productos: productos,
                        cantidadtipos: tipos.length,
                       
                     })

           
                     })

        })
                })
            
          
            
        
           
},
productdetalle: function(req,res){
    db.productos.findByPk(req.params.id)
     
    .then(function(productos){
      
                    


                   
                    res.status(200).json({
                      
                      url: `http://localhost:3001/uploads/products/${productos.image}`,
                      productos:productos
                     })
                    
     
})

},
  users: function(req,res){
    db.usuarios.findAll()
    .then(function(usuarios){
        let array = []
        for(let i=0; i<usuarios.length; i++){

         array.push({
            id: usuarios[i].id,
            nombre:  usuarios[i].nombre,
            email:  usuarios[i].email,
            detalle:  `/users/profile/${usuarios[i].id}`,
           
        })
        }
        res.status(200).json({
            cantidad: usuarios.length,
           
            usuarios: array
         })
    })
      
},
usersdetalle: function(req,res){
    db.usuarios.findByPk(req.params.id)
    .then(function(usuarios){
      

        res.status(200).json({
            id: usuario.id,
            nombre: usuario.nombre,
            apellido: usuario.apellido,
            email: usuario.email,
            url:`/public/uploads/avatars/${usuarios.image}`
           })
    
    })

}


}
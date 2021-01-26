module.exports = function(sequelize, dataTypes) {
    let alias = "productos";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        id_tipo: {
            type: dataTypes.INTEGER,
            notNull: true
        },
        id_sexo: {
            type: dataTypes.INTEGER,
            notNull: true
        },
        nombreProducto: {
            type: dataTypes.STRING,
            notNull: true
        },
        descripcion: {
            type: dataTypes.STRING,
            notNull: true
        },
        id_talle: {
            type: dataTypes.STRING,
            notNull: true
            
        },
        precio: {
            type: dataTypes.DECIMAL,
            notNull: true
        },
        image: {
            type: dataTypes.BLOB,
            notNull: true
        }
        
        
        

        
        

    };
    let config = {
        tableName: 'productos',
        timestamps: false,
        underscored: true
       
    }

    const productos = sequelize.define("productos", cols, config);
    productos.associate = function(modelos){
      productos.belongsTo(modelos.tipo, {
        foreignKey : 'tipo_fk',
        as : 'tipos'
      }),
      productos.belongsTo(modelos.sexo, {
        foreignKey : 'sexo_fk',
        as : 'sexo'
      }),
     
      productos.belongsToMany(modelos.talle, {
        as:"talles",
        through:"productos_talle",
        foreignKey:"producto_fk",
        otherkey:"talle_fk",
        timestamps:false
      })
    }
    return productos;
    
}

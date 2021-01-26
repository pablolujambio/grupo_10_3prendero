module.exports = function(sequelize, dataTypes) {
    let alias = "tipo";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
          type: dataTypes.STRING,
          notNull: true
        }
        
        
  
        
        
  
    };
    let config = {
        tableName: 'tipos',
        timestamps: false,
        underscored: true
       
    }
  
    let tipo =sequelize.define("tipo", cols,config);

    tipo.associate=function(modelos){
        tipo.hasMany(modelos.productos,{
            as:"productos",
            foreignKey:"tipo_fk"
        });
    }
  
    return tipo
    
  }
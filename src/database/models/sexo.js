module.exports = function(sequelize, dataTypes) {
    let alias = "sexo";
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
        tableName: 'sexos',
        timestamps: false,
        underscored: true
       
    }
  
    let sexo =sequelize.define("sexo", cols,config);

    sexo.associate=function(modelos){
        sexo.hasMany(modelos.productos,{
            as:"productos",
            foreignKey:"sexo_fk"
        });
    }

    return sexo
  }
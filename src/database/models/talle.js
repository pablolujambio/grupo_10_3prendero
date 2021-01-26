module.exports = function(sequelize, dataTypes) {
  let alias = "talle";
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
      tableName: 'talles',
      timestamps: false,
      underscored: true
     
  }

  
  let talle =sequelize.define("talle", cols,config);
  talle.associate=function(modelos){
    talle.hasMany(modelos.productos,{
        as:"productos",
        foreignKey:"id_talle"
    });
}

  
  return talle
  
}
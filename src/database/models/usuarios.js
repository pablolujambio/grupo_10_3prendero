module.exports = function(sequelize, dataTypes) {
    let alias = "usuarios";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: dataTypes.STRING,
            notNull: true
        },
        apellido: {
            type: dataTypes.STRING,
            notNull: true
        },
        username: {
            type: dataTypes.STRING,
            notNull: true
        },
        email: {
            type: dataTypes.STRING,
            notNull: true
        },
        password: {
            type: dataTypes.STRING,
            notNull: true
        },
        repassword: {
            type: dataTypes.STRING,
            notNull: true
        },
        date: {
            type: dataTypes.STRING,
            
        },
        image: {
            type: dataTypes.STRING,
            notNull: true
        }

        
        

    };
    let config = {
        tableName: 'usuarios',
        timestamps: false,
        underscored: true
       
    }

    const usuarios = sequelize.define(alias, cols, config)
    
    return usuarios
    
}
const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
const userModel = (sequelize) => {
  // defino el modelo
  sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    user: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,

    },
    city: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    image: {
            type:DataTypes.STRING,
            required:true
    },

    publicIdImage:{
        type:DataTypes.STRING,
        required: true
    },

    phone: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,

    },
    address: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    role: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isIn: [['comun', 'professional', 'admin']]
          }
    },

  },{timestamps: false });
};

module.exports = userModel

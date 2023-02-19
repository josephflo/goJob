const { DataTypes } = require('sequelize');

const serviceModel = (sequelize) => {
  // defino el modelo
  sequelize.define('Service', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    tittle: {
      type: DataTypes.STRING,
      allowNull: false
    },
    state: {
      type: DataTypes.STRING,
      defaultValue: 'pendiente',
      validate: {
          isIn: [['pendiente', 'proceso', 'terminado']]
        }
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    location: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    presupuesto: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    score:{
      type: DataTypes.INTEGER,
      default: 0
    },
    // UserId: {
    //   type: DataTypes.INTEGER
    // }

  
  },{timestamps: false });
};

module.exports = serviceModel

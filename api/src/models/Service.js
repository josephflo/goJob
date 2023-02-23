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
    priceIdStripe:{
      type: DataTypes.STRING,
      allowNull: true
    },
    productIdStripe :{
      type: DataTypes.STRING,
      allowNull: true
    },
    score:{
      type: DataTypes.INTEGER,
      default: 0
    },
  
  
  },{timestamps: false });
};

module.exports = serviceModel

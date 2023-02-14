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
      type: DataTypes.TEXT,
      allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    }
  

  },{timestamps: false });
};

module.exports = serviceModel

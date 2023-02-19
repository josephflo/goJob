const { DataTypes } = require('sequelize');

const ratingModel = (sequelize) => {
  // defino el modelo
  sequelize.define('Rating', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      rating: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
  },{timestamps: false });
};

module.exports = ratingModel

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

    },
    review: {
      type: DataTypes.TEXT,
    },
    fecha_review: {
      type: DataTypes.DATEONLY,
      defaultValue: sequelize.fn('NOW'),
      allowNull: false   
    }
  },{timestamps: false });
};

module.exports = ratingModel

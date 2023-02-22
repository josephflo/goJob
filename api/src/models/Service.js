const { DataTypes } = require("sequelize");

const serviceModel = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "Service",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      tittle: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      state: {
        type: DataTypes.STRING,
        defaultValue: "pendiente",
        validate: {
          isIn: [["pendiente", "proceso", "terminado"]],
        },
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      provincia: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      ciudad: {
          type: DataTypes.STRING,
          allowNull: false,
      },
      direccion: {
          type: DataTypes.STRING,
      },
      presupuesto: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      // stripepriceId:{
      //   type: DataTypes.STRING,
      //   //allowNull: false
      // },
      score: {
        type: DataTypes.INTEGER,
        default: 0,
      }

    },
    { timestamps: false }
  );
};

module.exports = serviceModel;

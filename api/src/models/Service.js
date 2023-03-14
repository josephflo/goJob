const { DataTypes, Sequelize } = require("sequelize");

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
      active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
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
      presupuesto: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      imageServiceUrl: {
        type: DataTypes.STRING,
        defaultValue: "sin foto"
      },
      imagePublicId: {
        type: DataTypes.STRING,
      },
      score: {
        type: DataTypes.INTEGER,
        default: 0,
      },
      review: {
        type: DataTypes.TEXT,
        defaultValue: "none",
      },
      fecha_publicacion: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.NOW,
        allowNull: false,   
      },
      
      //ubicacion
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

      //stripe
      stripeProductId:{
        type: DataTypes.TEXT,
      },
      stripeSesionId:{
        type: DataTypes.TEXT,
      },
      stripeSesionURL:{
        type: DataTypes.TEXT,
      },

    },
    { timestamps: false }
  );
};

module.exports = serviceModel;

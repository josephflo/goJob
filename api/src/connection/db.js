require('dotenv').config();
const { Sequelize } = require('sequelize');

//models
const userModel = require("../models/User")
const jobModel = require("../models/Job")

const {
    DB_USER,
    DB_NAME,
    DB_PASSWORD,
    DB_PORT,
    DB_HOST,
} = process.env;
/******* FIN DE EXPORTACIONES********** */

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`, {
logging: false, // set to console.log to see the raw SQL queries
native: false, // lets Sequelize know we can use pg-native for ~30% more speed
});



//creacion de modelos
userModel(sequelize)
jobModel(sequelize)

//destructuring de modelos
const { User, Job } = sequelize.models;


/****** RELACIONES ********** */
//relacion Users y Jobs
User.belongsToMany(Job, {through: "UsersJobs"})
Job.belongsToMany(User, {through: "UsersJobs"})

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize,     // para importart la conexión { conn } = require('./db.js');
};

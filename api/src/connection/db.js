require('dotenv').config();
const { Sequelize } = require('sequelize');

//models
const userModel = require("../models/User")
const jobModel = require("../models/Job")
const serviceModel = require("../models/Service")
const ratingModel = require("../models/Rating")

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
serviceModel(sequelize)
ratingModel(sequelize)

//destructuring de modelos
const { User, Job, Service, Rating } = sequelize.models;


/****** RELACIONES ********** */
//relacion Users y Jobs
User.belongsToMany(Job, {through: "UsersJobs", timestamps: false})
Job.belongsToMany(User, {through: "UsersJobs", timestamps: false})

//relacion Users a Service
User.hasMany(Service, {
  foreignKey: 'UserId',
  as: "myServices"
});
Service.belongsTo(User, {
  foreignKey: 'UserId',
  as: "userId"
});

User.belongsToMany(Service, {
  through: 'ServiceMyTrabajo',
  foreignKey: 'userId',
  timestamps: false,
  as: "myTrabajos",
});
Service.belongsToMany(User, {
  through: 'ServiceMyTrabajo',
  foreignKey: 'serviceId',
  timestamps: false,
  as: "trabajadorId"
});

//=>Postular
User.belongsToMany(Service, {
  through: 'ServicePostulantesUser',
  foreignKey: 'userId',
  timestamps: false,
  as: "postulaciones"
});
Service.belongsToMany(User, {
  through: 'ServicePostulantesUser',
  foreignKey: 'serviceId',
  timestamps: false,
  as: "postulantes"
});

//=>

//relacion de Service y Jobs
Service.belongsToMany(Job, {through: "ServicesJobs", timestamps: false})
Job.belongsToMany(Service, {through: "ServicesJobs", timestamps: false})

//Relacion Users a Users
User.belongsToMany(User, {
  timestamps: false,
  through: 'UserFriends', // nombre de la tabla intermedia
  foreignKey: 'userId',
  otherKey: 'friendId',
  as: 'friends', // nombre de la columna en el modelo
});


module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize,     // para importart la conexión { conn } = require('./db.js');
};

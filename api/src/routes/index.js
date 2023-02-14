const {Router} = require ('express');

///Aca van las rutas que se conectan con el index

const user = require('./user');
//const job = require('./job');
//const service = require('./service');




/////
const app = Router();

// configurar las routes(app)

app.use('/user', user)
//app.use('/job', job)
//app.use('/service', service)

module.exports = app;

const express = require("express")
const cors = require("cors");
const morgan = require('morgan');
//importar Rutas
const routes = require ('./routes/index.js') // todas las rutas estan ligadas a esta, por lo tanto no necesito traer las otras rutas

// crear app
const app = express()

//configurar midelware
app.use(cors())
app.use(morgan('dev'));


//convertir a json
app.use(express.json())
app.use(express.urlencoded({extended: true}))

//cargar rutas
app.use('/', routes);


module.exports = app


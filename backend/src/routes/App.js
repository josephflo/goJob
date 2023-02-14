const express = require("express")
const cors = require("cors");
const morgan = require('morgan');
//importar Rutas
const UserRoutes = require("./user")

// crear app
const app = express()

//configurar midelware
app.use(cors())
app.use(morgan('dev'));


//convertir a json
app.use(express.json())
app.use(express.urlencoded({extended: true}))

//cargar rutas
app.use("/go-job", UserRoutes)


module.exports = app


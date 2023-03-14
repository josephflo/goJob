const express = require("express")
const cors = require("cors");
const morgan = require('morgan');
const fileupload = require("express-fileupload")

//importar Rutas
const routes = require ('./routes/index.js'); // todas las rutas estan ligadas a esta, por lo tanto no necesito traer las otras rutas
const { eventListenComplete } = require("./handlers/stripeHandler.js");

// crear app
const app = express()

//configurar midelware
app.use(cors())
app.use(morgan('dev'));


//webhook
let router2 = express.Router()
router2.post("/stripe/webhook", express.raw({type: 'application/json'}), eventListenComplete)
app.use('/', router2);

//convertir a json
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(fileupload({
    useTempFiles: true,
    tempFileDir: "./uploads"
}))


//cargar rutas
app.use('/', routes);




module.exports = app


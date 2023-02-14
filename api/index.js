const { conn } = require('./src/connection/db');
const express = require("express")
const cors = require("cors");
const morgan = require('morgan');

//rutas
const UserRoutes = require("./src/routes/user")


require('dotenv').config();
const { PORT } = process.env;

//  
const app = express()

//configurar midelware
app.use(cors())
app.use(morgan('dev'));


//convertir a json
app.use(express.json())
app.use(express.urlencoded({extended: true}))

//cargar rutas

app.use("/go-job", UserRoutes)




//force:true - elimina todas la bases de datos, y las vuelve a crear en base a los modelos
//alter:true - actualiza las tablas de BASE DE DATOS en base a los modelos

conn.sync({ force: true }).then(() => {
//conn.sync().then(() => {
    app.listen(PORT, () => {
    //conn.drop();    //ESTO ES PARA ELIMINAR TODAS LAS TABLAS
    console.log("************* BIEN ****************");
    console.log(`UUU listening at ${PORT}`); // eslint-disable-line no-console
  })
}).catch((err)=>{
    console.log("*********************  ERROR ****************************")
    console.log(err);
})

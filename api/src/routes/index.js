const {Router, raw} = require ('express');

///Aca van las rutas que se conectan con el index

const user = require('./user');
const job = require('./job');
const service = require('./service');
const stripe = require("./stripe")
const cloudinary = require("./cloudinary")
const adminUser = require("./adminUser")


/////
const app = Router();



// configurar las routes(app)
app.use("/admin", adminUser)
app.use('/user', user)
app.use('/job', job)
app.use('/service', service)
//app.use("/stripe", raw({type: 'application/json'}),stripe)
app.use("/stripeG", stripe)

app.use("/cloudinary",cloudinary)



module.exports = app;

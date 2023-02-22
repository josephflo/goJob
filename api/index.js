const { conn } = require("./src/connection/db");
const app = require("./src/App");
const bcrypt = require("bcrypt");


require("dotenv").config();
const { PORT } = process.env;

  //////////////////////////////////////////////////////////////////////
  let {jobs, users} = require("./src/connection/dataPrueba")
  const {Job, User} = require("./src/connection/db")
  //creacion automatica de Jobs y Users para pruebas
  let automatic = async()=>{
    let creaJob = jobs.map(async(job)=>{
      await Job.create(job);      
      return ""
    })

    let creaUsers = users.map(async(user)=>{
      let pwd = await bcrypt.hash(user.user.password, 10);
      user.user.password = pwd;
      let newUser = await User.create(user.user);
      await newUser.addJobs(user.jobs);

      return ""

    })
  }

//force:true - elimina todas la bases de datos, y las vuelve a crear en base a los modelos
//alter:true - actualiza las tablas de BASE DE DATOS en base a los modelos

conn.sync({ force: true }).then(() => {
//conn.sync().then(() => {
  let resultado
  automatic().then(res=>resultado = res).catch(error=>console.log("mall"))

    app.listen(PORT, () => {
      //conn.drop();    //ESTO ES PARA ELIMINAR TODAS LAS TABLAS
      console.log("************* BIEN ****************");
      console.log(`UUU listening at ${PORT}`); // eslint-disable-line no-console
    });
  })
  .catch((err) => {
    console.log("*********************  ERROR ****************************");
    console.log(err.message);
  });

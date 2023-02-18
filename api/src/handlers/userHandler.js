const {Job, Service, User} = require("../connection/db")
const bcrypt = require("bcrypt");
const {uploadImage} = require("../services/cloudinary")


const { 
  getDbUser,
  getUserByID,
  getUserName
 } = require("../controllers/userController");
const { createToken } = require("../services/jwt");

const getAllUser = async (req, res) => {
  let {name} = req.query
  let page = Number(req.query.page || 1)
  let page_size = Number(req.query.page_size || 15)

  let userTotal
  try {
    if(name){
      userTotal = await getUserName(name, page, page_size)
    }else{
      userTotal = await getDbUser(page, page_size);
    }

    if(!userTotal.result.length) throw Error("Sin resultados")

   

    //si todo salio bien
    return res.status(200).json({
      status: "success",
      message: "Extraccion exitosa",
      ...userTotal

    });

  } catch (error) {
    return res.status(404).json({
      status: "error",
      message: error.message
    });
  }
};


const getUserID = async (req, res) => {
  const id = req.params.id;
  let userTotal;

  try {
    if (!id) throw Error("Mising data")

    //extraemos datos y comprobamos si hay datos
    userTotal = await getUserByID(id);
    
   
    //si todo salio bien
    return res.status(200).json({
      status: "success",
      message: "Extraccion exitosa",
      result: userTotal
    });

  } catch (error) {
    return res.status(404).json({
      status: "error",
      message: error.message
    });
  }

};



const createUser = async (req, res) => {
  let newUser = req.body.user;
  let idJobs = req.body.jobs;
  let error = false;

  try {
    if(!newUser) throw new Error("Mising data");
    
    if(req.files?.image){
      let pwd = await bcrypt.hash(newUser.password, 10);
      newUser.password = pwd;
      const result = await uploadImage(req.files.image.tempFilePath);
      if(result.error) error = true; // Si se produce un error al cargar la imagen, establecemos la variable de estado en verdadero
      newUser.imageurl = result.secure_url;
      newUser.imagePublicId = result.imagePublicId;
    } else {
      let pwd = await bcrypt.hash(newUser.password, 10);
      newUser.password = pwd;
      newUser.imageurl = "sin foto";
      newUser.imagePublicId = "sin foto";
    }

    let userCreated = await User.create(newUser);
    delete userCreated.dataValues.password;

    // Verificar que los JobIds existen en la base de datos
    const jobs = await Job.findAll({ where: { id: idJobs }});
    if (jobs.length !== idJobs.length) {
      throw new Error("Uno o más JobIds no existen en la base de datos");
    }

    await userCreated.addJobs(jobs);
    // agregar nuevo usuario a Jobs

    return res.status(200).json({
      status: "success",
      message: "Usuario creado correctamente",
      result: userCreated,
      jobs: "Jobs agregados correctamente",
      error: error // Agregamos la variable de estado a la respuesta
    });
  } catch (error) {
    return res.status(404).json({
      status: "error",
      message: error.message,
      error: error || true // Establecemos la variable de estado en verdadero si se produce un error en cualquier lugar del bloque try-catch
    });
  }
};



const login = async(req, res)=>{
  const userLogin = req.body
  try {
    if(!userLogin.user || !userLogin.password) throw new Error("Mising data")
    //verificamos si existe el usuario
    let resultUser = await User.findOne({
      where: {user: userLogin.user},
      include:{
        model: Job,
        through: { 
          attributes:[]
        }
      }
    })
    if(!resultUser) throw new Error("El usuario no existe")
  
    //comprobamos contraseña
    let pwd = bcrypt.compareSync(userLogin.password, resultUser.password);
    if(!pwd)throw new Error("Contraseña incorrecta")
  
    //creamos token
    let token = createToken(resultUser.dataValues)
  
    //eliminamos contraseña
    delete resultUser.dataValues.password

    //traemos los service de Users
    let services = await resultUser.getServices()

    //merge de las respuestas
    let merge = {
      ...resultUser.dataValues,
      services: [...services]
    }
  
    //si todo salio bien
    return res.status(200).json({
      status: "success",
      message: "Login correctamente",
      result: merge,
      token: token
    });
  } catch (error) {
    return res.status(400).json({
      status: "error",
      message: error.message,
    });
  }
}
//job
const addJob = async(req, res)=>{
  let idUser = req.user.id
  let idJob = req.body.id

  try {
    if(!idJob) throw new Error("Mising data")

    //traemos el model para agregar
    let user = await User.findOne({where: {id: idUser}})
    await user.addJob(idJob)

    // let job = await Job.findOne({where: {id: idJob}})
    // await job.addUser(idUser)

    return res.status(400).json({
      status: "success",
      message: "Job agregado correctamente",
      idUser,
      idJob,
      user,
  
    });
  } catch (error) {
    return res.status(400).json({
      status: "error",
      message: error.message,
    });
  }
}

const deleteJob = async(req, res)=>{
  let idUser = req.user.id
  let idJob = req.body.id

  try {
    if(!idJob) throw new Error("Mising data")

    //traemos el model para agregar
    let user = await User.findOne({where: {id: idUser}})
    await user.removeJob(idJob)

    return res.status(400).json({
      status: "success",
      message: "Job eliminado correctamente"
    });
  } catch (error) {
    return res.status(400).json({
      status: "error",
      message: error.message,
    });
  }
}


const decifrarToken = async(req, res)=>{

  return res.status(200).json({
    status: "success",
    token: req.user
  })
}
//amigos
const addFriend = async(req, res)=>{
  //extraemos datos
  let idUser = req.user.id
  let idFriend = req.body.idFriend
  
  try {
    if(!idUser || !idFriend) throw new Error("Mising data")

    let user = await User.findOne({where: {id: idUser}})
    await user.addFriend(idFriend)

    return res.status(200).json({
      status: "success",
      message: `Amigo "${user.dataValues.user}" agregado correctamente`,
    })
  } catch (error) {
    return res.status(400).json({
      status: "error",
      message: error.message
    })
  }
  
}

const deleteFriend = async(req, res)=>{
  //extraemos datos
  let idUser = req.user.id
  let idFriend = req.body.idFriend
  
  try {
    if(!idUser || !idFriend) throw new Error("Mising data")

    let user = await User.findOne({where: {id: idUser}})
    await user.removeFriend(idFriend)

    return res.status(200).json({
      status: "success",
      message: `Amigo "${user.dataValues.user}" eliminado correctamente`,
    })
  } catch (error) {
    return res.status(400).json({
      status: "error",
      message: error.message
    })
  }
}

const getFriends = async(req, res)=>{
  let idUser = req.user.id

  try {
    let user = await User.findOne({
      where: {id: idUser},
      include: {
        model: User,
        as: 'friends',
        attributes: { exclude: ['password', 'role'] },
        through: { 
          attributes:[]
        }
      }
    })

    if(!user.dataValues.friends.length){
      return res.status(200).json({
        status: "success",
        message: `No se encontraron amigos de este usuario`,
        result: user.dataValues.friends
      })
    }


    return res.status(200).json({
      status: "success",
      message: `Extraccion de amigos exitosa`,
      result: user.dataValues.friends
    })
  } catch (error) {
    return res.status(400).json({
      status: "error",
      message: error.message
    })
  }
}
//server
const createServer = async (req, res) => {
  let newService = req.body;
  let idUser = req.user.id;
  try {
    let getUser = await User.findOne({ where: { id: idUser } });
    //agregamos servicio
    let service = await getUser.createService(newService);
    //vinculamos el servicio con los jobs
    let addJob = await service.addJobs(newService.jobs)


    return res.status(200).json({
      status: "success",
      message: "Servicio creado correctamente",
      service: service,
    });
  } catch (error) {
    return res.status(400).json({
      status: "error",
      message: error.message,
    });
  }
};

const getAllService = async (req, res) => {
  let idUser = req.user.id;
  try {
    let getUser = await User.findOne({ where: { id: idUser } });
    let allServices = await getUser.getServices({
      include: {
        model: Job,
        through: { 
        attributes:[]
      }}
      
    })

    return res.status(400).json({
      status: "error",
      message: "Extraccion exitosa",
      result: allServices
    })

  } catch (error) {
    return res.status(400).json({
      status: "error",
      message: error.message
    })
  }
};

const actualizarService = async(req, res)=>{
  let putService = req.body.service;
  let idUser = req.user.id;
  let idService = Number(req.params.idService)
  let putJobs = req.body.jobs

  try {
    //actualizamos datos de service
    let service = await Service.update(
      putService, 
      {
        where: {
          id: idService,
          UserId: idUser  
        }
      }
    )
    //actualizamos relacion Service Jobs
    if(putJobs.length){
      let actService = await Service.findOne({where: {id: idService}})
      await actService.setJobs(putJobs)
    }



    return res.status(200).json({
      status: "success",
      message: "Se actualizo correctamente",  
    });
  } catch (error) {
    return res.status(400).json({
      status: "error",
      message: error.message,
    });
  }
}

const deleteService = async (req, res)=>{
  let idUser = req.user.id;
  let idService = Number(req.params.idService)

  try {
    let deleteService = await Service.destroy({
      where: {id: idService, UserId: idUser}
    })

    //si todo sale bien
    return res.status(200).json({
      status: "success",
      message: "Service Eliminado correctamente"
    });


  } catch (error) {
    return res.status(400).json({
      status: "error",
      message: error.message,
    });
  }
  

}




module.exports = {
  getAllUser,
  getUserID,
  createUser,
  login,
  decifrarToken,
  addFriend,
  deleteFriend,
  addJob,
  deleteJob,
  getFriends,
  getAllService,
  createServer,
  actualizarService,
  deleteService
};


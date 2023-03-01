const { Job, Service, User } = require("../connection/db");
const bcrypt = require("bcrypt");
const { uploadImage } = require("../services/cloudinary");
const fs = require("fs-extra");
const {bienvenidaMail, notifyPostulacionMyTrabajo} = require("../templatesEmails/singupEmail");

const {
  getDbUser,
  getUserByID,
  promedioRating,
  userLoginEmail,
} = require("../controllers/userController");
const { Op, STRING } = require("sequelize");
const { fechaActual } = require("../helpers/fechaActual");
const { createToken } = require("../services/jwt")

const getAllUser = async (req, res) => {
  let page = Number(req.query.page || 1);
  let page_size = Number(req.query.page_size || 15);

  let name = req.query.name;
  let role = req.query.role;
  let job = Number(req.query.job);
  let provincia = req.query.provincia;
  let ciudad = req.query.ciudad;
  let dias = req.query.dias;
  let horario = req.query.horario;
  let orderRating = req.query.orderRating;
  let orderName = req.query.orderName;

  let querys = {};

  //configuraciones para filtrado
  let statementUser = {
    state: true,
  };
  if (name) {
    statementUser[Op.or] = {
      firstName: { [Op.iLike]: `%${name}%` },
      lastName: { [Op.iLike]: `%${name}%` },
      user: { [Op.iLike]: `%${name}%` },
    };
    querys.name = name;
  }
  if (role) {
    statementUser.role = role;
    querys.role = role;
  }
  if (provincia) {
    statementUser.provincia = provincia;
    querys.provincia = provincia;
  }
  if (ciudad) {
    statementUser.ciudad = ciudad;
    querys.ciudad = ciudad;
  }
  if (dias) {
    statementUser.dias = { [Op.contains]: [dias] };
    querys.dias = dias;
  }
  if (horario) {
    statementUser.horario = horario;
    querys.horario = horario;
  }

  //order
  let stamentOrder = {};

  if (orderRating) {
    stamentOrder.order = [["rating_promedio", orderRating]];
    querys.orderRating = orderRating;
  } else if (orderName) {
    if (orderName == "ASC") {
      stamentOrder.order = [["lastName", "ASC"]];
      querys.orderName = orderName;
    } else if (orderName == "DESC") {
      stamentOrder.order = [["lastName", "DESC"]];
      querys.orderName = orderName;
    }
  } else {
    stamentOrder.order = [["rating_promedio", "DESC"]];
  }

  let statementeJob = {};
  if (job) {
    statementeJob.id = job;
    querys.job = job;
  }

  try {
    let userTotal = await getDbUser(
      page,
      page_size,
      querys,
      statementUser,
      statementeJob,
      stamentOrder
    );

    if (!userTotal.result.length) throw Error("Sin resultados");

    //si todo salio bien
    return res.status(200).json({
      status: "success",
      message: "Extraccion exitosa",
      ...userTotal,
    });
  } catch (error) {
    return res.status(404).json({
      status: "error",
      message: error.message,
    });
  }
};

const getUserID = async (req, res) => {
  const id = req.params.id;
  let userTotal;

  try {
    if (!id) throw Error("Mising data");

    //extraemos datos y comprobamos si hay datos
    userTotal = await getUserByID(id);

    //si todo salio bien
    return res.status(200).json({
      status: "success",
      message: "Extraccion exitosa",
      result: userTotal,
    });
  } catch (error) {
    return res.status(404).json({
      status: "error",
      message: error.message,
    });
  }
};

const createUser = async (req, res) => {
  let newUser = req.body;

  let nombre
  let apellido
  let email
  if(newUser.firstName) nombre = newUser.firstName
  if(newUser.lastName) apellido = newUser.lastName
  if(newUser.email) email = newUser.email

  let idJobs = []
  if(newUser.jobs){
    idJobs = [...newUser.jobs]
    delete newUser.jobs
  }

  try {
    if (!newUser) throw new Error("Mising data");

    //verificamos si ya existe el usario
    let verifyUser = await userLoginEmail(newUser.email)

    if(verifyUser){
      //creamos token
      let token = createToken(verifyUser);

      return res.status(200).json({
        status: "success",
        message: "Inicio sesion correctamente",
        result: verifyUser,
        token: token

      });
    }



    let userCreated = await User.create(newUser);


    // agregar nuevo usuario a Jobs
    await userCreated.addJobs(idJobs);

    //mandomos email de bienvenida
    if(nombre, apellido, email){
      bienvenidaMail(nombre, apellido, email);
    }

    let usuarioFinal = await userLoginEmail(email)

    //creamos token
    let token = createToken(usuarioFinal);
    // console.log("**************************************");
    // console.log("hasta aqui todo bien");
    // console.log("**************************************");
    return res.status(200).json({
      status: "success",
      message: "Usuario creado correctamente",
      result: usuarioFinal,
      token
    });
  } catch (error) {
    return res.status(404).json({
      status: "error",
      message: error.message,
      user: newUser
    });
  }
};

const uploadImg = async (req, res) => {
  let errors = false;

  let user = req.body.user;

  let newUser = {};

  console.log("Entra a post img");

  try {
    //if(req.files.image){
    const result = await uploadImage(req.files.image.tempFilePath);
    if (result.error) errors = true; // Si se produce un error al cargar la imagen, establecemos la variable de estado en verdadero
    newUser.imageurl = result.secure_url;
    newUser.imagePublicId = result.public_id;

    console.log("*******************************************");
    console.log(newUser.imageurl);
    console.log(newUser.imagePublicId);

    await fs.unlink(req.files.image.tempFilePath); // borra el archivo despues de subirlo a cloudinary

    //extramos el usuario
    let updateImgUser = await User.update(newUser, {
      where: { user: user },
    });

    return res.status(200).json({
      status: "success",
      message: "Imagen guardada correctamente",
    });
    //}

    return res.status(400).json({
      status: "error",
      message: "No hay imagen",
    });
  } catch (error) {
    return res.status(400).json({
      status: "error",
      message: error.message,
      error: errors,
    });
  }
};

const deleteUser = async (req, res) => {
  let idUser = req.user.id;
  try {
    let deleteUser = await User.update(
      { state: false },
      { where: { id: idUser } }
    );

    return res.status(200).json({
      status: "success",
      message: "Elimino correctamente el usuario",
    });
  } catch (error) {
    return res.status(400).json({
      status: "error",
      message: error.message,
    });
  }
};

//job
const addJob = async (req, res) => {
  let idUser = req.user.id;
  let idJob = req.body.id;

  try {
    if (!idJob) throw new Error("Mising data");

    //traemos el model para agregar
    let user = await User.findOne({ where: { id: idUser } });
    await user.addJob(idJob);

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
};

const deleteJob = async (req, res) => {
  let idUser = req.user.id;
  let idJob = req.body.id;

  try {
    if (!idJob) throw new Error("Mising data");

    //traemos el model para agregar
    let user = await User.findOne({ where: { id: idUser } });
    await user.removeJob(idJob);

    return res.status(400).json({
      status: "success",
      message: "Job eliminado correctamente",
    });
  } catch (error) {
    return res.status(400).json({
      status: "error",
      message: error.message,
    });
  }
};

const putUser = async (req, res) => {
  let idUser = req.user.id;
  let putUser = req.body;

  let idJobsBoolean = false
  let idJobs
  if(putUser.jobs) {
    idJobs = [...putUser.jobs]
    idJobsBoolean = true
  }
  
  try {
    //actualizamos el user
    let newUser = await User.update(putUser, { where: { id: idUser } });

    //actualizamos sus Jobs
    let user;
    if(idJobsBoolean){
      user = await User.findOne({
        where: { id: idUser },
      });

      await user.setJobs(idJobs);
    }

    return res.status(200).json({
      status: "success",
      message: "Actualizado correctamente",
    });
  } catch (error) {
    return res.status(400).json({
      status: "error",
      message: error.message,
    });
  }
};

const decifrarToken = async (req, res) => {
  return res.status(200).json({
    status: "success",
    token: req.user,
  });
};
//amigos
const addFriend = async (req, res) => {
  //extraemos datos
  let idUser = req.user.id;
  let idFriend = req.body.idFriend;

  try {
    if (!idUser || !idFriend) throw new Error("Mising data");

    let user = await User.findOne({ where: { id: idUser } });
    await user.addFriend(idFriend);

    return res.status(200).json({
      status: "success",
      message: `Amigo "${user.dataValues.user}" agregado correctamente`,
    });
  } catch (error) {
    return res.status(400).json({
      status: "error",
      message: error.message,
    });
  }
};

const deleteFriend = async (req, res) => {
  //extraemos datos
  let idUser = req.user.id;
  let idFriend = req.body.idFriend;

  try {
    if (!idUser || !idFriend) throw new Error("Mising data");

    let user = await User.findOne({ where: { id: idUser } });
    await user.removeFriend(idFriend);

    return res.status(200).json({
      status: "success",
      message: `Amigo "${user.dataValues.user}" eliminado correctamente`,
    });
  } catch (error) {
    return res.status(400).json({
      status: "error",
      message: error.message,
    });
  }
};

const getFriends = async (req, res) => {
  let idUser = req.user.id;

  try {
    let user = await User.findOne({
      where: { id: idUser },
      include: {
        model: User,
        as: "friends",
        attributes: { exclude: ["password", "role"] },
        through: {
          attributes: [],
        },
      },
    });

    if (!user.dataValues.friends.length) {
      return res.status(200).json({
        status: "success",
        message: `No se encontraron amigos de este usuario`,
        result: user.dataValues.friends,
      });
    }

    return res.status(200).json({
      status: "success",
      message: `Extraccion de amigos exitosa`,
      result: user.dataValues.friends,
    });
  } catch (error) {
    return res.status(400).json({
      status: "error",
      message: error.message,
    });
  }
};
//service
const createServer = async (req, res) => {
  let newService = req.body;
  let idUser = req.user.id;
  try {
    let getUser = await User.findOne({ where: { id: idUser } });
    //agregamos servicio
    let service = await await getUser.createMyService(newService);

    //vinculamos el servicio con los jobs
    let addJob = await service.addJobs(newService.jobs);

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

const getAllMyService = async (req, res) => {
  let idUser = req.user.id;

  // let page = Number(req.query.page || 1)
  // let page_size = Number(req.query.page_size || 15)
  // const offset = (page - 1) * page_size;

  // let state = req.query.state
  // let tittle = req.query.name
  // let jobId = Number(req.query.job)

  // let querys = {}

  try {
    let getUser = await User.findOne({ where: { id: idUser } });
    let allServices = await getUser.getMyServices({
      //where: {state},
      attributes: { exclude: ["UserId"] },
      include: [
        {
          model: Job,
          through: {
            attributes: [],
          },
        },
        {
          model: User,
          as: "userId",
          attributes: ["id", "firstName", "lastName", "user", "email", "phone"],
        },
        {
          model: User,
          as: "postulantes",
          attributes:["id", "firstName", "lastName", "user", "email", "phone", "imagePerfil", "rating_promedio", ],
          through: {
            attributes: [],
          },
        },
      ],
    });

    return res.status(200).json({
      status: "error",
      message: "Extraccion exitosa",
      result: allServices,
    });
  } catch (error) {
    return res.status(400).json({
      status: "error",
      message: error.message,
    });
  }
};

const actualizarService = async (req, res) => {
  let putService = { ...req.body };
  let idUser = req.user.id;
  let idService = Number(req.params.idService);

  let putJobs = [];
  if (req.body.jobs) {
    putJobs = [...req.body.jobs];
    delete putService.jobs;
  }

  try {
    //actualizamos datos de service
    let service = await Service.update(putService, {
      where: {
        id: idService,
        UserId: idUser,
      },
    });
    //actualizamos relacion Service Jobs
    if (putJobs && putJobs.length && req.body.jobs) {
      let actService = await Service.findOne({ where: { id: idService } });
      await actService.setJobs(putJobs);
    } else if (putJobs && !putJobs.length && req.body.jobs) {
      let actService = await Service.findOne({ where: { id: idService } });
      await actService.setJobs([]);
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
};

const actualizarStateService = async (req, res) => {
  let idUser = req.user.id;
  let idService = req.params.idService;
  let activeService = req.body.active;

  try {
    //actualizamos datos de service
    let serviceState = await Service.update(
      { active: activeService },
      {
        where: {
          id: idService,
          UserId: idUser,
        },
      }
    );

    if (serviceState[0] == 0) {
      return res.status(400).json({
        status: "error",
        message: "No se pudo actualizar",
      });
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
};

const deleteService = async (req, res) => {
  let idUser = req.user.id;
  let idService = Number(req.params.idService);

  try {
    let deleteService = await Service.destroy({
      where: { id: idService, UserId: idUser },
    });

    //si todo sale bien
    return res.status(200).json({
      status: "success",
      message: "Service Eliminado correctamente",
    });
  } catch (error) {
    return res.status(400).json({
      status: "error",
      message: error.message,
    });
  }
};

const postularService = async (req, res) => {
  let idUser = req.user.id;
  let idService = req.params.idService;

  try {
    if (isNaN(idService)) {
      return res.status(400).json({
        status: "error",
        message: "Datos de entrada invalidos",
      });
    }
    //agregamos postulante
    const service = await Service.findOne({ where: { id: idService } });
    let postulate = await service.addPostulante(idUser);
    //postulaciones

    //extraemos el postulante
    let userPostulante = await User.findOne({where: {id: idUser}})
    let namePostulante = `${userPostulante.firstName} ${userPostulante.lastName}`

    //extraemos data del usario al que notificaremos
    let userNotificado = await User.findOne({where: {id: service.UserId}})
    let nameNotificado = `${userNotificado.firstName} ${userNotificado.lastName}`

    //mandar notify email
    //const notifyPostulacionMyTrabajo = (user1, correo, postulante, ofertaTrabajo)
    notifyPostulacionMyTrabajo(nameNotificado, userNotificado.email, namePostulante, service.tittle)

    //si todo salio bien
    return res.status(200).json({
      status: "success",
      message: "Postulo correctamente ",
    });
  } catch (error) {
    return res.status(400).json({
      status: "error",
      message: error.message,
    });
  }
};

const deletePostuleService = async (req, res) => {
  let idUser = req.user.id;
  let idService = req.params.idService;

  try {
    if (isNaN(idService)) {
      return res.status(400).json({
        status: "error",
        message: "Datos de entrada invalidos",
      });
    }

    const service = await Service.findByPk(idService);

    let postulate = await service.removePostulante(idUser);

    //si todo salio bien
    return res.status(200).json({
      status: "success",
      message: "Elimino la postulacion correctamente ",
    });
  } catch (error) {
    return res.status(400).json({
      status: "error",
      message: error.message,
      postulate,
    });
  }
};

const elegirTrabajador = async (req, res) => {
  let idUser = req.user.id;

  let idTrabajador = Number(req.body.trabajador);
  let idService = Number(req.body.service);

  try {
    if (!idTrabajador || !idService) throw Error("Mising data");

    //elegimos el trabajador
    let service = await Service.findOne({
      where: { id: idService, UserId: idUser },
    });
    let addTraba = await service.addTrabajadorId(idTrabajador);

    //eliminamos al trabajdor de la lista postulantes
    let deletePostu = await service.removePostulante(idTrabajador);

    //actualizamos el state del service
    let actStateSer = await Service.update(
      {
        state: "proceso",
      },
      {
        where: { id: idService, UserId: idUser },
      }
    );

    //Si todo salio bien
    return res.status(200).json({
      status: "success",
      message: "Se agrego trabjador al servicio exitosamente",
    });
  } catch (error) {
    return res.status(400).json({
      status: "error",
      message: error.message,
    });
  }
};

const calificarService = async (req, res) => {
  let idUser = req.user.id;
  let idService = Number(req.params.idService);
  let scoreService = req.body.score;
  let review = req.body.review;

  try {
    let stamentUpdate = {
      state: "terminado",
    };
    if (scoreService) stamentUpdate.score = Number(scoreService);
    if (review) stamentUpdate.review = review;

    //actualizamos el state del service
    let actStateSer = await Service.update(stamentUpdate, {
      where: { id: idService, UserId: idUser },
    });

    //eliminamos los postulantes
    let deleteAllPost = await Service.findOne({where: {id: idService}})
    deleteAllPost.setPostulantes(null)

    //extraemos la informacion del servicio para el rating
    let service = await Service.findOne({
      where: { id: idService },
      include: {
        model: User,
        as: "trabajadorId",
        attributes: ["id", "user", "rating"],
        through: {
          attributes: [],
        },
      },
    });

    //guardamos en el trabajador su nuevo rating
    if (scoreService) {
      service.trabajadorId.forEach(async (traba) => {
        let trabajador = await User.findOne({
          where: { id: traba.id },
        });

        let newRating = [
          ...trabajador.rating,
          {
            idUser,
            idService,
            rating: Number(scoreService) || 0,
            date: fechaActual(),
            review: review || "",
          },
        ];

        //sacamos promedio del rating
        let promRating = promedioRating(newRating);

        //actualizamos el user
        let actualizar = await User.update(
          {
            rating: newRating,
            rating_promedio: promRating,
          },
          {
            where: { id: traba.id },
          }
        );
      });
    }

    return res.status(200).json({
      status: "success",
      message: "Calificacion del servicio exitosa",
    });
  } catch (error) {
    return res.status(400).json({
      status: "error",
      message: error.message,
    });
  }
};

module.exports = {
  getAllUser,
  getUserID,
  createUser,
  uploadImg,
  deleteUser,
  decifrarToken,
  addFriend,
  deleteFriend,
  addJob,
  deleteJob,
  getFriends,
  getAllMyService,
  createServer,
  actualizarService,
  deleteService,
  putUser,
  postularService,
  deletePostuleService,
  elegirTrabajador,
  calificarService,
};

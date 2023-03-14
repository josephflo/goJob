const { Service, User, Job } = require("../connection/db");
const { getDbService, paginacion, getServices } = require("../controllers/serviceController");
const axios = require("axios");
const { Op } = require("sequelize");
const { query } = require("express");

require('dotenv').config();
const { DB_HOST, PORT } = process.env;

const getInfoDashboard = async (req, res)=>{
  try {
    //traigo solo servicios de este mes
    // Obtener la fecha actual
    const today = new Date();
    
    // Obtener el primer día del mes actual
    const primerDiaDelMes = new Date(today.getFullYear(), today.getMonth(), 1);
    
    // Obtener el último día del mes actual
    const ultimoDiaDelMes = new Date(today.getFullYear(), today.getMonth() + 1, 0);
    /********** GANANCIAS TODO *********** */
    const serviceTodo = await Service.findAll({
      attributes: ["presupuesto"],
      order: [["fecha_publicacion", "DESC", ]],
      where: {state: "terminado"}
    });
    let preciosServicesAll = serviceTodo.map((ele)=>ele.presupuesto.trim())
    let gananciasTodo = 0
    preciosServicesAll.forEach(ele => {
      gananciasTodo += Number(ele)
    });

    /********** ESTE MES************ */
    // Consulta Sequelize que filtra los servicios por la fecha de publicación del mes actual
    const servicesMes = await Service.findAll({
      order: [["fecha_publicacion", "DESC", ]],
      where: {
        fecha_publicacion: {
          [Op.between]: [primerDiaDelMes, ultimoDiaDelMes],
        }
      },
      include: [{
        model: Job,
        through: { 
          attributes:[]
        }
      }]
    });


    let serviciosFinalizados = servicesMes.filter((ele)=> ele.state == "terminado")
    let preciosServices = serviciosFinalizados.map((ele)=>ele.presupuesto.trim())
    let gananciasEsteMes = 0
    preciosServices.forEach(ele => {
      gananciasEsteMes += Number(ele)
    });

    //ultimos pagos
    let ultimosPagos = [
      serviciosFinalizados[0],
      serviciosFinalizados[1]
    ]
    
    //contamos el total de usuarios
    let userCount = await User.count();
    
    //servicios agregados este mes
    let servicesEsteMesCount = servicesMes.length

    //Ultimo servicio
    let ultimoService = await Service.findOne({
      order: [['fecha_publicacion', 'DESC']],
      attributes: { exclude: ['UserId'] },
      include:[
        {
        model: User,
        as:"userId",
        attributes:["id", "firstName", "lastName", "user", "email", "phone", "role", "imagePerfil"],
        },
        {
          model: Job,
          through: { 
            attributes:[]
          }
        }
      ],
    })

    //ultimo usuario
    let ultimoUser = await User.findAll({
      limit: 2,
      order: [['fecha_register', 'DESC']],
      attributes:["id", "firstName", "lastName", "user", "email", "phone", "role", "imagePerfil"]

    })

  
    return res.status(200).json({
      status: "success",
      message: "Extraccion exitosa",
      userTotal: userCount,
      serviciosGananciasTodo: gananciasTodo,
      serviciosEsteMesCount: servicesEsteMesCount,
      gananciasEsteMes: gananciasEsteMes,
      ultimosPagos: ultimosPagos,
      ultimoService: ultimoService,
      ultimoUser: ultimoUser
    })
  } catch (error) {
    return res.status(404).json({
      status: "error",
      message: error.message,
    })
  }
}

const deleteUser = async (req, res) => {
    let idUser = req.body.id;
    try {
      idUser = Number(idUser)
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


const putUserAdmin = async (req, res) => {
  let idUser = req.body.id;
  let putUser = req.body;

  let idJobsBoolean = false
  let idJobs
  if(putUser.jobs) {
    idJobs = [...putUser.jobs]
    idJobsBoolean = true
    delete putUser.jobs
  }

  //eliminaos el id del put
  delete putUser.id
  
  
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

    let userActualizado = await User.findOne({
      where: {id: idUser},
      include: [
        {      
          model: Job,
          through: {
            attributes: [],
          },
        }
      ]

    })

    return res.status(200).json({
      status: "success",
      message: "Actualizado correctamente",
      user: userActualizado
    });
  } catch (error) {
    return res.status(400).json({
      status: "error",
      message: error.message,
    });
  }
};

const deleteService = async (req, res)=>{
  let idService = req.body.id
  try {
    idService = Number(idService)
    
    //eliminamos el servicio
    let putServicee = await Service.update(
      {
        active: "false"
      },
      {
        where: {id: idService}
      }
    )

    return res.status(200).json({
      status: "success",
      message: "Elimino correctamente el servicio",

    })

  } catch (error) {
    return res.status(405).json({
      status: "error",
      message: error.message
    })
  }
}

const activeService = async (req, res)=>{
  let idService = req.body.id
  try {
    idService = Number(idService)
    
    //eliminamos el servicio
    let putServicee = await Service.update(
      {
        active: "true"
      },
      {
        where: {id: idService}
      }
    )

    return res.status(200).json({
      status: "success",
      message: "activo correctamente el servicio",

    })

  } catch (error) {
    return res.status(405).json({
      status: "error",
      message: error.message
    })
  }
}



module.exports = {
  getInfoDashboard,
  deleteUser,
  putUserAdmin,
  deleteService,
  activeService
};

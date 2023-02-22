const { Service, User, Job } = require("../connection/db");
const { getDbService, paginacion } = require("../controllers/serviceController");
const axios = require("axios");
const { Op } = require("sequelize");
const { query } = require("express");

require('dotenv').config();
const { DB_HOST, PORT } = process.env;

const getAllServices = async (req, res)=>{
  let page = Number(req.query.page || 1)
  let page_size = Number(req.query.page_size || 15)
  const offset = (page - 1) * page_size;

  let state = req.query.state
  let tittle = req.query.name
  let jobId = Number(req.query.job)

  console.log(state);

  let querys = {}

  //configuraciones para filtrado
  let statementService = {}

  if(state){
    statementService.state = state
    querys.state = state
  }
  if(tittle){
    statementService.tittle = {[Op.iLike]:`%${tittle}%`}
    querys.tittle = tittle
  }

  console.log("11111111111111111111111111111111111");
  console.log(statementService);

  let statmenteJob = {}
  if(jobId){
    statmenteJob.id = jobId

    querys.job = jobId

  }

 

  try {
    let service = await Service.findAll({
      where: {...statementService},
      limit: page_size,
      offset: offset,
      attributes: { exclude: ['UserId'] },
      include: [
        {
          model: Job,
          where: {...statmenteJob},
          through: { 
            attributes:[]
          }
        },
        {
          model: User,
          as:"userId",
          attributes:["id", "firstName", "lastName", "user", "email", "phone"]

        },
        {
          model: User,
          as: "postulantes",
          attributes:["id", "firstName", "lastName", "user", "email", "phone"],
          through: { 
            attributes:[]
          }
        },
        {
          model: User,
          as: "trabajadorId",
          attributes:["id", "firstName", "lastName", "user", "email", "phone"],
          through: { 
            attributes:[]
          }
        }
      ]
    });

    //contamos el total de paginas
    const totalCount = await Service.count({
      where: statementService,
      include : {
          model: Job,
          where: statmenteJob,
          through: { 
          attributes:[]
        }
      },
    });
    const totalPages = Math.ceil(totalCount / page_size);
    console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
    console.log(totalCount);
    //paginacion
    let paginado = paginacion(page, page_size, totalPages, totalCount, querys)

    //agregando los demas querys
    


    return res.status(200).json({
      status: "success",
      message: "Extraccion exitosa",
      ...paginado,
      result: service,
      

    })

  } catch (error) {
    return res.status(400).json({
      status: "error",
      message: error.message
    })
  }
}

const getIdService = async (req, res) => {
  let idService = req.params.id;

  try {
    //let getUser = await User.findOne({ where: { id: idUser } });
    let service = await Service.findOne({
      where: {id: idService},
      attributes: { exclude: ['idPostulantes', 'servicePostulantesUser', "UserId"] },
      include: [
        {
          model: Job,
          through: { 
            attributes:[]
          }
        },
        {
          model: User,
          as:"userId",
          attributes:["id", "firstName", "lastName", "user", "email", "phone"]

        },
        {
          model: User,
          as: "postulantes",
          attributes:["id", "firstName", "lastName", "user", "email", "phone"],
          through: { 
            attributes:[]
          }
        },
        {
          model: User,
          as: "trabajadorId",
          attributes:["id", "firstName", "lastName", "user", "email", "phone"],
          through: { 
            attributes:[]
          }
        }
      ]
    });

    if(service == undefined)throw new Error("No se encontraron resultados")

    return res.status(200).json({
      status: "success",
      message: "Extraccion exitosa",
      result: service
    })

  } catch (error) {
    return res.status(400).json({
      status: "error",
      message: error.message
    })
  }

};



module.exports = {
  getAllServices,
  getIdService,
  
};

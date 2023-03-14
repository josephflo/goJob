const { Service, User, Job } = require("../connection/db");
const { getDbService, paginacion, getServices } = require("../controllers/serviceController");
const axios = require("axios");
const { Op } = require("sequelize");
const { query } = require("express");

require('dotenv').config();
const { DB_HOST, PORT } = process.env;

const getAllServices = async (req, res)=>{
  let page = Number(req.query.page || 1)
  let page_size = Number(req.query.page_size || 15)

  let job = Number(req.query.job)
  let state = req.query.state
  let active = req.query.active
  let tittle = req.query.tittle
  let provincia = req.query.provincia
  let ciudad = req.query.ciudad

  let orderFecha = req.query.orderFecha

  console.log(state);

  let querys = {}

  //configuraciones para filtrado
  let statementService = {
    active: String(true)
  }

  if(active != undefined){
    statementService.active = String(active)
    querys.active = String(active)
  }

  if(state){
    statementService.state = state
    querys.state = state
  }
  if(tittle){
    statementService.tittle = {[Op.iLike]:`%${tittle}%`}
    querys.tittle = tittle
  }
  if(provincia){
    statementService.provincia = provincia
    querys.provincia = provincia
  }
  if(ciudad){
    statementService.ciudad = ciudad
    querys.ciudad = ciudad
  }

  let statementeJob = {}
  if(job){
    statementeJob.id = job

    querys.job = job

  }

  //order
  let statementFecha = {}

  if(orderFecha){
    statementFecha.order = [['fecha_publicacion', orderFecha]] 
    querys.orderFecha = orderFecha
  }else{
    statementFecha.order = [['fecha_publicacion', 'DESC']] 
  }
 

  try {
    let totalServices = await getServices(page, page_size, querys, statementService, statementeJob, statementFecha)

    return res.status(200).json({
      status: "success",
      message: "Extraccion exitosa",
      ...totalServices
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
          attributes:["id", "firstName", "lastName", "user", "email", "phone", "imagePerfil"]

        },
        {
          model: User,
          as: "postulantes",
          attributes:["id", "firstName", "lastName", "user", "email", "phone", "imagePerfil", "rating_promedio"],
          through: { 
            attributes:[]
          }
        },
        {
          model: User,
          as: "trabajadorId",
          attributes:["id", "firstName", "lastName", "user", "email", "phone", "imagePerfil", "rating_promedio"],
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

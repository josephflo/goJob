const { Service, User, Job } = require("../connection/db");
const { getDbService } = require("../controllers/serviceController");
const axios = require("axios");

require('dotenv').config();
const { DB_HOST, PORT } = process.env;

const getAllServices = async (req, res)=>{
  let page = Number(req.query.page || 1)
  let page_size = Number(req.query.page_size || 15)
  const offset = (page - 1) * page_size;

  try {
    let service = await Service.findAll({
      limit: page_size,
      offset: offset,
      //attributes: { exclude: ['password'] },
      include: [
        {
          model: Job,
          through: { 
            attributes:[]
          }
        }
      ],
    });

    //contamos el total de paginas
    const totalCount = await Service.count();
    const totalPages = Math.ceil(totalCount / page_size);

    //paginacion
    let nextPage
    let previousPage
    if(page == totalPages && page == 1 || totalCount <= 0){
      nextPage = null
      previousPage = null
    }else if(page == 1){
      previousPage = null
      nextPage = `http://${DB_HOST}:${PORT}/service?page=${page+1}&page_size=${page_size}`
    }else if(page > 1 && page < totalPages){
      previousPage = `http://${DB_HOST}:${PORT}/service?page=${page-1}&page_size=${page_size}`
      nextPage = `http://${DB_HOST}:${PORT}/service?page=${page+1}&page_size=${page_size}`
    }else if(page = totalPages){
      previousPage = `http://${DB_HOST}:${PORT}/service?page=${page-1}&page_size=${page_size}`
      nextPage = null
    }


    return res.status(200).json({
      status: "success",
      message: "Extraccion exitosa",
      nextPage,
      previousPage,
      totalPages,
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
      include: [
        {
          model: Job,
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

const {Job, Service, User} = require("../connection/db")
require('dotenv').config();
const { DB_HOST, PORT } = process.env;

const getServices = async (page, page_size, querys, statementService, statementeJob, statementFecha) =>{
  const offset = (page - 1) * page_size;

  let verifyStatementeJob = Object.keys(statementeJob)

  try {
    let service
    if(verifyStatementeJob.length){
      service = await Service.findAll({
        where: {...statementService},
        order: statementFecha.order,
        limit: page_size,
        offset: offset,
        attributes: { exclude: ['UserId'] },
        include: [
          {
            model: Job,
            where: {...statementeJob},
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
    }else{
      service = await Service.findAll({
        where: {...statementService},
        order: statementFecha.order,
        limit: page_size,
        offset: offset,
        attributes: { exclude: ['UserId'] },
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
    
    }

    
    //contamos el total de paginas
    let totalCount
    if(verifyStatementeJob.length){
      totalCount = await Service.count({
        where: statementService,
        include : {
            model: Job,
            where: statementeJob,
            through: { 
            attributes:[]
          }
        },
      });
    }else{
      totalCount = await Service.count({
        where: statementService,
      });
    }

    const totalPages = Math.ceil(totalCount / page_size);

    //paginacion
    let paginado = paginacion(page, page_size, totalPages, totalCount, querys)
 

    return {
      ...paginado,
      totalCount: totalCount,
      result: service
    }

  } catch (error) {
    return res.status(400).json({
      status: "error",
      message: error.message
    })
  }
}

let  convertObjToQuery = (objeto)=>{
  let queryString = "";
  for (let clave in objeto) {
    if (objeto.hasOwnProperty(clave)) {
      if (queryString.length > 0) {
        queryString += "&";
      }
      queryString += encodeURIComponent(clave) + "=" + encodeURIComponent(objeto[clave]);
    }
  }
  return `&${queryString}`;
}


const paginacion = (page, page_size, totalPages, totalCount, querys)=>{
  let query = convertObjToQuery(querys)
  

  let nextPage
  let previousPage

  if(page == totalPages && page == 1 || totalCount <= 0){
    nextPage = null
    previousPage = null
  }else if(page == 1){
    previousPage = null
    nextPage = `/service?page=${page+1}&page_size=${page_size}`
    nextPage = nextPage.concat(query)
  }else if(page > 1 && page < totalPages){
    previousPage = `/service?page=${page-1}&page_size=${page_size}`
    previousPage = previousPage.concat(query)

    nextPage = `/service?page=${page+1}&page_size=${page_size}`
    nextPage = nextPage.concat(query)

  }else if(page = totalPages){
    previousPage = `/service?page=${page-1}&page_size=${page_size}`
    previousPage = previousPage.concat(query)

    nextPage = null
  }

  return {
    nextPage,
    previousPage,
    totalPages
  }
}

const pagarService = async(idSession, idProduct)=>{
  try {
    //actualizamos el servicio ya pagado
    let servicePagado = await Service.update(
      {
        state: "terminado",
      },
      {
        where: {
          stripeSesionId: idSession, 
          stripeProductId: idProduct
        }
      }
    )
    console.log("Pago registrado exitosamente");
    return true

  } catch (error) {
    throw new Error (error.message)

  }

}


module.exports = {
  getServices,
  paginacion,
  pagarService
}
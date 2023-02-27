const {Job, Service, User} = require("../connection/db")
const {Op} = require("sequelize");

require('dotenv').config();
const { DB_HOST, PORT } = process.env;


const getDbUser = async (page, page_size, querys, statementUser, statementeJob, stamentOrder) =>{
  const offset = (page - 1) * page_size;

  let verifyStatementeJob = Object.keys(statementeJob)

  
  console.log("-------------------------aaaaaaaaaa-------------");
  console.log(stamentOrder.order);

  try{
    let result
    if(verifyStatementeJob.length){
      result = await User.findAll({
        where: statementUser,
        order: stamentOrder.order,
        limit: page_size,
        offset: offset,
        attributes: { exclude: ['password', "state"] },
        include: [
          {
            model: Job,
            where: statementeJob,
            through: { 
              attributes:[]
            }
          }
        ],
      });
  
    }else{
      result = await User.findAll({
        where: statementUser,
        order: stamentOrder.order,
        limit: page_size,
        offset: offset,
        attributes: { exclude: ['password', "state"] },
        include: [
          {
            model: Job,
            through: { 
              attributes:[]
            }
          }
        ],
      });
  
    }
  
  
    //contamos el total de paginas
    let totalCount
    if(verifyStatementeJob.length){
      totalCount = await User.count({
        where: {...statementUser},
        include: [
          {
            model: Job,
            where: statementeJob,
            through: { 
              attributes:[]
            }
          }
        ],
      });
    }else{
      totalCount = await User.count({
        where: {...statementUser},
      });
    }

    const totalPages = Math.ceil(totalCount / page_size);

    let paginado = paginacion(page, page_size, totalPages, totalCount, querys)



    return {
      ...paginado,
      result
    }
  }catch(error){
    throw Error(error.message)
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

  console.log("///////////////////////////////////////////////////");
  console.log(totalCount);

  if(page == totalPages && page == 1 || totalCount <= 0 || totalCount < page_size){
    nextPage = null
    previousPage = null
  }else if(page == 1){
    previousPage = null

    nextPage = `/user?page=${page+1}&page_size=${page_size}`
    nextPage = nextPage.concat(query)
  }else if(page > 1 && page < totalPages){
    previousPage = `/user?page=${page-1}&page_size=${page_size}`
    previousPage = previousPage.concat(query)

    nextPage = `/user?page=${page+1}&page_size=${page_size}`
    nextPage = nextPage.concat(query)

  }else if(page = totalPages){
    previousPage = `/user?page=${page-1}&page_size=${page_size}`
    previousPage = previousPage.concat(query)

    nextPage = null
  }

  return {
    nextPage,
    previousPage,
    totalPages
  }
  







}

const getUserByID = async (id) =>{
  try{
    const result = await User.findOne({
      where: {id: id, state: true},
      attributes: { exclude: ['password'] },
      include: [
        {
          model: User,
          as: 'friends',
          attributes: { exclude: ['password', 'role'] },
          through: { 
            attributes:[]
          }
        },
        {
          model: Job,
          through: { 
            attributes:[]
          }
        },
        {
          model: Service,
          as: "myServices",
          include:
          {
            model: User,
            as: "postulantes",
            attributes:["id", "firstName", "lastName", "user", "email", "phone"],
            through: { 
              attributes:[]
            }
          }
        },
        {
          model: Service,
          as: "myTrabajos",
          through: { 
            attributes:[]
          }
        }   
  
      ],
    });

    //verificamos si trae resultados
    if(result == undefined)throw new Error("No se encontraron resultados")

 
    let merge = {
      ...result.dataValues
    }

    return merge

  }catch(error){
    throw Error(error.message)

  }
}

const promedioRating = (ratings)=>{

  let suma = 0
  let values = ratings.forEach((regi)=>{
    suma += Number(regi.rating)
  })

  let promedio = (suma / ratings.length).toFixed(1);

  console.log(promedio);

  return Number(promedio)


}

const userLoginEmail = async(email)=>{
  try {
    const result = await User.findOne({
      where: {email: email, state: true},
      attributes: { exclude: ['password'] },
      include: [
        {
          model: User,
          as: 'friends',
          attributes: { exclude: ['password', 'role'] },
          through: { 
            attributes:[]
          }
        },
        {
          model: Job,
          through: { 
            attributes:[]
          }
        },
        {
          model: Service,
          as: "myServices",
          include:
          {
            model: User,
            as: "postulantes",
            attributes:["id", "firstName", "lastName", "user", "email", "phone"],
            through: { 
              attributes:[]
            }
          }
        },
        {
          model: Service,
          as: "myTrabajos",
          through: { 
            attributes:[]
          }
        }   
  
      ],
    });
    
    if(result == undefined){
      return false
    }

    return result

  } catch (error) {
    return false
  }
}

module.exports = {
  getDbUser,
  getUserByID,
  promedioRating,
  userLoginEmail
}
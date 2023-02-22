const {Job, Service, User} = require("../connection/db")
const {Op} = require("sequelize");

require('dotenv').config();
const { DB_HOST, PORT } = process.env;


const getDbUser = async (page, page_size, querys, statementUser, statmenteJob) =>{
  const offset = (page - 1) * page_size;

  try{
    let result = await User.findAll({
      where: statementUser,
      order: [['firstName', 'ASC']],
      limit: page_size,
      offset: offset,
      attributes: { exclude: ['password'] },
      include: [
        {
          model: Job,
          where: statmenteJob,
          through: { 
            attributes:[]
          }
        }
      ],
    });

    //contamos el total de paginas
    let totalCount = await User.count({
      where: {...statementUser},
      include: [
        {
          model: Job,
          where: statmenteJob,
          through: { 
            attributes:[]
          }
        }
      ],
    });
    if(!statmenteJob.id){
      totalCount = totalCount/2
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

    nextPage = `http://${DB_HOST}:${PORT}/user?page=${page+1}&page_size=${page_size}`
    nextPage = nextPage.concat(query)
  }else if(page > 1 && page < totalPages){
    previousPage = `http://${DB_HOST}:${PORT}/user?page=${page-1}&page_size=${page_size}`
    previousPage = previousPage.concat(query)

    nextPage = `http://${DB_HOST}:${PORT}/user?page=${page+1}&page_size=${page_size}`
    nextPage = nextPage.concat(query)

  }else if(page = totalPages){
    previousPage = `http://${DB_HOST}:${PORT}/user?page=${page-1}&page_size=${page_size}`
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
      where: {id: id},
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

    //traemos el score
     

    let rating = await getRating(result)

    let merge = {
      rating,
      ...result.dataValues
    }

    return merge

  }catch(error){
    throw Error(error.message)

  }
}

const getRating = async(user)=>{

  let scores = await user.getMyTrabajos({
    where: {
      state: "terminado",
      score: {
        [Op.gt]: 0
      }
    },
  })

  scores = scores.map(sc=>{
    return sc.score
  })

  if(!scores.length){
    return "none"
  }

  const suma = scores.reduce((acumulador, valorActual) => acumulador + valorActual);
  const promedio = suma / scores.length;

  return parseFloat(promedio.toFixed(1));

}


module.exports = {
  getDbUser,
  getUserByID
}
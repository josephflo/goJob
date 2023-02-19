const {Job, Service, User} = require("../connection/db")
const {Op} = require("sequelize");

require('dotenv').config();
const { DB_HOST, PORT } = process.env;


const getDbUser = async (page, page_size) =>{
  const offset = (page - 1) * page_size;

  try{
    let result = await User.findAll({
      order: [['firstName', 'ASC']],
      limit: page_size,
      offset: offset,
      attributes: { exclude: ['password'] },
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
    const totalCount = await User.count({
      where: {
        // Condición de búsqueda (opcional)
      }
    });
    const totalPages = Math.ceil(totalCount / page_size);

    //paginacion
    let nextPage
    let previousPage
    if(page == totalPages && page == 1){
      nextPage = null
      previousPage = null
    }else if(page == 1){
      previousPage = null
      nextPage = `http://${DB_HOST}:${PORT}/user?page=${page+1}&page_size=${page_size}`
    }else if(page > 1 && page < totalPages){
      previousPage = `http://${DB_HOST}:${PORT}/user?page=${page-1}&page_size=${page_size}`
      nextPage = `http://${DB_HOST}:${PORT}/user?page=${page+1}&page_size=${page_size}`
    }else if(page = totalPages){
      previousPage = `http://${DB_HOST}:${PORT}/user?page=${page-1}&page_size=${page_size}`
      nextPage = null
    }


    return {
      nextPage,
      previousPage,
      totalPages,
      result
    }
  }catch(error){
    throw Error(error.message)
  }
}

const getUserName = async(name, page, page_size) =>{

  const offset = (page - 1) * page_size;
  try{
    const result = await User.findAll({
      order: [['firstName', 'ASC']],
      limit: page_size,
      offset: offset,
      where: {
        [Op.or]: {
          firstName: {[Op.iLike]:`%${name}%`},
          lastName: {[Op.iLike]:`%${name}%`}
        }
      },
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
        }
      ],
    });

    // let rating = await getRating(result)

    // let merge = {
    //   ...result.dataValues,
    //   rating
    // } 

  
    //contamos el total de paginas
    const totalCount = await User.count({
      where: {firstName: {[Op.iLike]:`%${name}%`}}
    });
    const totalPages = Math.ceil(totalCount / page_size);

    //paginacion
    let nextPage
    let previousPage
    if(page == totalPages && page == 1){
      nextPage = null
      previousPage = null
    }else if(page < totalPages){
      previousPage = null
      nextPage = `http://${DB_HOST}:${PORT}/user?page=${page+1}&page_size=${page_size}&name=${name}`
    }else if(page > 1 && page < totalPages){
      previousPage = `http://${DB_HOST}:${PORT}/user?page=${page-1}&page_size=${page_size}&name=${name}`
      nextPage = `http://${DB_HOST}:${PORT}/user?page=${page+1}&page_size=${page_size}&name=${name}`
    }else if(page = totalPages){
      previousPage = `http://${DB_HOST}:${PORT}/user?page=${page-1}&page_size=${page_size}&name=${name}`
      nextPage = null
    }

    return {
      nextPage,
      previousPage,
      totalPages,
      result
    }
  }catch(error){
    throw Error(error.message)
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

  const suma = scores.reduce((acumulador, valorActual) => acumulador + valorActual);
  const promedio = suma / scores.length;

  return parseFloat(promedio.toFixed(1));

}


module.exports = {
  getDbUser,
  getUserByID,
  getUserName
}
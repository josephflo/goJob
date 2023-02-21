const {Job, Service, User} = require("../connection/db")
require('dotenv').config();
const { DB_HOST, PORT } = process.env;

const getDbService = async () =>{
  try{
    const dbService = await Service.findAll();
    return dbService;
  }catch(error){
    console.log(error)
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

  // state
  // tittle
  // jobId

  if(page == totalPages && page == 1 || totalCount <= 0){
    nextPage = null
    previousPage = null
  }else if(page == 1){
    previousPage = null
    nextPage = `http://${DB_HOST}:${PORT}/service?page=${page+1}&page_size=${page_size}`
    nextPage = nextPage.concat(query)
  }else if(page > 1 && page < totalPages){
    previousPage = `http://${DB_HOST}:${PORT}/service?page=${page-1}&page_size=${page_size}`
    previousPage = previousPage.concat(query)

    nextPage = `http://${DB_HOST}:${PORT}/service?page=${page+1}&page_size=${page_size}`
    nextPage = nextPage.concat(query)

  }else if(page = totalPages){
    previousPage = `http://${DB_HOST}:${PORT}/service?page=${page-1}&page_size=${page_size}`
    previousPage = previousPage.concat(query)

    nextPage = null
  }

  return {
    nextPage,
    previousPage,
    totalPages
  }
}



module.exports = {
  getDbService,
  paginacion
}
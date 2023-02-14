const {Job, Service, User} = require("../connection/db")

const getDbService = async () =>{
  try{
    const dbService = await Service.findAll();
    return dbService;
  }catch(error){
    console.log(error)
  }
}

module.exports = {
  getDbService,
}
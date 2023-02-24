const {Job, Service, User} = require("../connection/db")

const getDbJob = async () =>{
  try{
    const dbJob = await Job.findAll();
    return dbJob;
  }catch(error){
    console.log(error)
  }
}


module.exports = {
  getDbJob
}
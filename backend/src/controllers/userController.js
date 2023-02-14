const {Job, Service, User} = require("../connection/db")

const getDbUser = async () =>{
  try{
    const dbUser = await User.findAll();
    return dbUser;
  }catch(error){
    console.log(error)
  }
}

module.exports = {
  getDbUser
}
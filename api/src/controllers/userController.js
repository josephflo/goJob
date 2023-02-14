const {Job, Service, User} = require("../connection/db")

const {Op} = require("sequelize");


const getDbUser = async () =>{
  try{
    const dbUser = await User.findAll();


    return dbUser;
  }catch(error){
    throw Error(error.message)
  }
}

const getUserName = async(name) =>{
  try{
    const dbUser = await User.findAll({
      where: {firstName: {[Op.iLike]:`%${name}%`}}
    });

    return dbUser;
  }catch(error){
    throw Error(error.message)
  }
}

const getUserByID = async (id) =>{
  try{
    const dbUser = await User.findOne({
      where: {id: id}
    });

    return dbUser;
  }catch(error){
    throw Error(error.message)

  }
}

module.exports = {
  getDbUser,
  getUserByID,
  getUserName
}
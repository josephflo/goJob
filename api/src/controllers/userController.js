const {Job, Service, User} = require("../connection/db")

const {Op} = require("sequelize");


const getDbUser = async () =>{
  try{
    let dbUser = await User.findAll({
      attributes: { exclude: ['password'] },
      include: {
        model: User,
        as: 'friends'
      },
    });

    return dbUser
  }catch(error){
    throw Error(error.message)
  }
}

const getUserName = async(name) =>{
  try{
    const dbUser = await User.findAll({
      where: {firstName: {[Op.iLike]:`%${name}%`}},
      attributes: { exclude: ['password'] },
      include: {
        model: User,
        as: 'friends'
      }
    });

    return dbUser;
  }catch(error){
    throw Error(error.message)
  }
}

const getUserByID = async (id) =>{
  try{
    const dbUser = await User.findOne({
      where: {id: id},
      attributes: { exclude: ['password'] },
      include: {
        model: User,
        as: 'friends'
      }
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
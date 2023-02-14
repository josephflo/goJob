const {Job, Service, User} = require("../connection/db")

const usersApi = async () =>{
  try{
    const usersApi = await User.findAll({ 
        include:Service,
        include:Job
    });
    return usersApi;
  }catch(error){
    console.log(error)
  }
}

module.exports = {
  usersApi
}
const jwt = require("jwt-simple")
const moment = require("moment")

//clave secreta
require('dotenv').config();
const { CLAVE_SECRET_CRYPT } = process.env;

//funcion para crear tokens
const createToken = (user)=>{
  const payload = {
    id: user.id,
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    //rating: user.rating,
    user: user.user,
    //password: user.password,
    city: user.city,
    //image: user.image,
    phone: user.phone,
    address: user.address,
    role: user.role,

    iat: moment().unix(),
    exp: moment().add(30, "days").unix()
  }

  return jwt.encode(payload, CLAVE_SECRET_CRYPT)

}

module.exports = {
  createToken
}

const jwt = require("jwt-simple")
const moment = require("moment")

//clave secreta
require('dotenv').config();
const { CLAVE_SECRET_CRYPT } = process.env;

//funcion para crear tokens
const createToken = (user)=>{
  const payload = {
    id: user.id,
    email: user.email,
    user: user.user,
    role: user.role,

    iat: moment().unix(),
    exp: moment().add(2, "days").unix()
  }

  return jwt.encode(payload, CLAVE_SECRET_CRYPT)

}

module.exports = {
  createToken
}

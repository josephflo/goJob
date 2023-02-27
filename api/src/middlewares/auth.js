//importar modulos
const jwt = require("jwt-simple");
const moment = require("moment");

//importar clave secreta
require('dotenv').config();
const { CLAVE_SECRET_CRYPT } = process.env;

//funcion de autenticacion middlewares
const auth = (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(403).json({
      status: "error",
      message: "La peticion no tiene la cabecera de autenticacion",
    });
  }

  //limpiar token
  //let token = req.headers.authorization.replace(/['"]+/g, "")
  let token = req.headers.authorization
  //decodificar token
  try {
    let payload = jwt.decode(token, CLAVE_SECRET_CRYPT)
    //comprobar expiracion
    if(payload.exp <= moment().unix()){
      return res.status(401).json({
        status: "error",
        message: "Token expirado",
      })
    }

    //agregar datos de usuario a request

    req.user = payload

    // req.user = {
    //   id: token
    // }

  } catch (error) {
    return res.status(404).json({
      status: "error",
      message: "Token invalido",
      error: error.message
    })
  }


  //pasar a ejecucion next
  next()

};

const verifyRole =  (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(403).json({
      status: "error",
      message: "La peticion no tiene la cabecera de autenticacion",
    });
  }

  //limpiar token
  //let token = req.headers.authorization.replace(/['"]+/g, "")
  let token = req.headers.authorization
  //decodificar token
  try {
    let payload = jwt.decode(token, CLAVE_SECRET_CRYPT)
    //comprobar expiracion
    if(payload.exp <= moment().unix()){
      return res.status(401).json({
        status: "error",
        message: "Token expirado",
      })
    }

    if(payload.role != "admin")throw new Error("No tiene persimo para hacer esta peticion")

    //agregar datos de usuario a request
    req.user = payload

  } catch (error) {
    return res.status(404).json({
      status: "error",
      message: "No tiene permisos para esta accion",
      error: error.message
    })
  }


  //pasar a ejecucion next
  next()

};


module.exports = {
  auth,
  verifyRole
}

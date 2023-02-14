const {Job, Service, User} = require("../connection/db")
const bcrypt = require("bcrypt");

const { 
  getDbUser,
  getUserByID,
  getUserName
 } = require("../controllers/userController");

const getAllUser = async (req, res) => {
  let {name} = req.query

  let userTotal
  try {
    if(name){
      userTotal = await getUserName(name)
    }else{
      userTotal = await getDbUser();
    }

    if(!userTotal.length) throw Error("Sin resultados")

  //si todo salio bien
  return res.status(404).json({
    status: "success",
    message: "Extraccion exitosa",
    users: userTotal
  });

  } catch (error) {
    return res.status(404).json({
      status: "error",
      message: error.message
    });
  }
};


const getUserID = async (req, res) => {
  const id = req.params.id;
  let userTotal;

  try {
    if (!id) throw Error("Mising data")

    //extraemos datos y comprobamos si hay datos
    userTotal = await getUserByID(id);
    if(userTotal == undefined){
      return res.status(404).json({
        status: "error",
        message: "No se encontraron resultados"
      });
    }

    //si todo salio bien
    return res.status(404).json({
      status: "success",
      message: "Extraccion exitosa",
      user: userTotal
    });

  } catch (error) {
    return res.status(404).json({
      status: "error",
      message: error.message,
      id
    });
  }

};

const postUser = async (req, res) => {
  try {
    let newUser = req.body;

    let pwd = await bcrypt.hash(newUser.password, 10);
    newUser.password = pwd

    let userCreated = await User.create(newUser);
    /// Por aca puede faltar agregar algo de otra tabla
    return res.status(200).json({
      status: "success",
      message: "Usuario creado correctamente",
      user: userCreated,
    });
  } catch (error) {
    return res.status(404).json({
      status: "error",
      message: error.message,
    });
  }
};

const login = async(req, res)=>{
const userLogin = req.body
try {
  if(!userLogin.user || !userLogin.password) throw new Error("Mising data")
  //verificamos si existe el usuario
  let resultUser = await User.findOne({
    where: {user: userLogin.user}
  })
  if(!resultUser) throw new Error("El usuario no existe")

  //comprobamos contraseña
  let pwd = bcrypt.compareSync(userLogin.password, resultUser.password);
  if(!pwd)throw new Error("Contraseña incorrecta")

  //si todo salio bien
  return res.status(200).json({
    status: "success",
    message: "Login correctamente",
    result: resultUser
  });
} catch (error) {
  return res.status(200).json({
    status: "success",
    message: error.message,
  });
}
}

const addJob = async(req, res)=>{
  
}

module.exports = {
  getAllUser,
  getUserID,
  postUser,
  login
};


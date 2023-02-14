const { Job, Service, User } = require("../connection/db");
const { 
  getDbUser,
  getUserByID,
  getUserName
 } = require("../controllers/userController");

const getAllUsersHandler = async (req, res) => {
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


const getIdUserHandler = async (req, res) => {
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

const postUserHandler = async (req, res) => {
  try {
    let newUser = req.body;

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

module.exports = {
  getAllUsersHandler,
  getIdUserHandler,
  postUserHandler,
};


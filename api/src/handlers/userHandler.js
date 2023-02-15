const {Job, Service, User} = require("../connection/db")
const bcrypt = require("bcrypt");

const { 
  getDbUser,
  getUserByID,
  getUserName
 } = require("../controllers/userController");
const { createToken } = require("../services/jwt");

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
  return res.status(200).json({
    status: "success",
    message: "Extraccion exitosa",
    result: userTotal,
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
      result: userTotal
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
      result: userCreated,
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
    where: {user: userLogin.user},
    include: {
      model: User,
      as: 'friends'
    }
  })
  if(!resultUser) throw new Error("El usuario no existe")

  //comprobamos contraseña
  let pwd = bcrypt.compareSync(userLogin.password, resultUser.password);
  if(!pwd)throw new Error("Contraseña incorrecta")

  //creamos token
  let token = createToken(resultUser.dataValues)

  //eliminamos contraseña
  delete resultUser.dataValues.password


  //si todo salio bien
  return res.status(200).json({
    status: "success",
    message: "Login correctamente",
    result: resultUser,
    token: token
  });
} catch (error) {
  return res.status(400).json({
    status: "error",
    message: error.message,
  });
}
}

const decifrarToken = async(req, res)=>{

  return res.status(200).json({
    status: "success",
    token: req.user
  })
}

const addFriend = async(req, res)=>{
  //extraemos datos
  let idUser = req.user.id
  let idFriend = req.body.idFriend
  
  try {
    if(!idUser || !idFriend) throw new Error("Mising data")

    let user = await User.findOne({where: {id: idUser}})
    await user.addFriend(idFriend)

    return res.status(200).json({
      status: "success",
      message: `Amigo "${user.dataValues.user}" agregado correctamente`,
    })
  } catch (error) {
    return res.status(400).json({
      status: "error",
      message: error.message
    })
  }
  
}

const deleteFriend = async(req, res)=>{
  //extraemos datos
  let idUser = req.user.id
  let idFriend = req.body.idFriend
  
  try {
    if(!idUser || !idFriend) throw new Error("Mising data")

    let user = await User.findOne({where: {id: idUser}})
    await user.removeFriend(idFriend)

    return res.status(200).json({
      status: "success",
      message: `Amigo "${user.dataValues.user}" eliminado correctamente`,
    })
  } catch (error) {
    return res.status(400).json({
      status: "error",
      message: error.message
    })
  }
}


module.exports = {
  getAllUser,
  getUserID,
  postUser,
  login,
  decifrarToken,
  addFriend,
  deleteFriend
};


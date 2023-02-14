const {User} = require("../connection/db")

const pruebaUser = async(req, res) => {
  const newUser = req.body

  try {
    if(!Object.keys(newUser).length){
      return res.status(400).json({
        status: "error",
        message: "Mising data"
      })
    }
    let result = await User.create(newUser)

    return res.status(200).json({
      status: "success",
      message: "Probando la primera ruta",
      result
    })
  } catch (error) {
      return res.status(400).json({
        status: "error",
        message: error.message
      })
  }


};




module.exports = {
  pruebaUser
}
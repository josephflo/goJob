const { Service, User, Job } = require("../connection/db");
const { notifyContactar } = require("../templatesEmails/singupEmail");



let contactarProfessional = async(req, res)=>{
  let userId = req.user.id
  let message = req.body.message

  let idProfesional = Number(req.params.idProfessional)

  try {
    let userPeticion = await User.findOne({where: {id: userId}})
    let userProfessional = await User.findOne({where: {id: idProfesional}})

    let nameUser = `${userPeticion.firstName} ${userPeticion.lastName}`
    let nameProfessional = `${userProfessional.firstName} ${userProfessional.lastName}`

    //enviamos notify
    notifyContactar(nameUser, userPeticion.email, nameProfessional, userProfessional.email, message)

    return res.status(200).json({
      status: "success",
      message: "Se contacto correctamente"
    })
  } catch (error) {
    return res.status(400).json({
      status: "error",
      message: error.message
    })
  }
}



module.exports = {
  contactarProfessional
}
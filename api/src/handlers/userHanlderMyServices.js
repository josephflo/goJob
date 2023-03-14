const { Op } = require("sequelize");
const {Job, Service, User} = require("../connection/db")



const getAllMyServices = async (req, res) => {
    let idUser = req.user.id;

    let query = req.query

    let wheres = {}
    let fecha_publicacion = query.fecha_publicacion || "DESC"  
     
    if(query.state)wheres.state = query.state
    if(query.tittle){
        wheres.tittle = {[Op.iLike]:`%${query.tittle}%`}
    }

    try {
      let getUser = await User.findOne({ where: { id: idUser } });
      let allServices = await getUser.getMyServices({
        where: wheres,
        order: [["fecha_publicacion", fecha_publicacion]],
        attributes: { exclude: ["UserId"] },
        include: [
          {
            model: Job,
            through: {
              attributes: [],
            },
          },
          {
            model: User,
            as: "postulantes",
            attributes:["id", "firstName", "lastName", "user", "email", "phone", "imagePerfil", "rating_promedio", ],
            through: {
              attributes: [],
            },
            include: {
              model: Job,
              through: {
                attributes: [],
              },
            }
          },
        ],
      });
  
      return res.status(200).json({
        status: "error",
        message: "Extraccion exitosa",
        result: allServices,
      });
    } catch (error) {
      return res.status(400).json({
        status: "error",
        message: error.message,
      });
    }
};

const getAllMyTrabajos = async (req, res) => {
    let idUser = req.user.id;

    let query = req.query

    let wheres = {}
    let fecha_publicacion = query.fecha_publicacion || "DESC"  
     
    if(query.state)wheres.state = query.state
    if(query.tittle){
        wheres.tittle = {[Op.iLike]:`%${query.tittle}%`}
    }

    try {
      let getUser = await User.findOne({ where: { id: idUser } });
      let allServices = await getUser.getMyTrabajos({
        where: wheres,
        order: [["fecha_publicacion", fecha_publicacion]],
        attributes: { exclude: ["UserId"] },
        include: [
          {
            model: Job,
            through: {
              attributes: [],
            },
          }
        ],
      });
  
      return res.status(200).json({
        status: "error",
        message: "Extraccion exitosa",
        result: allServices,
      });
    } catch (error) {
      return res.status(400).json({
        status: "error",
        message: error.message,
      });
    }
};

const getAllMyPostulaciones = async (req, res) => {
    let idUser = req.user.id;
    let query = req.query

    let wheres = {}
    let fecha_publicacion = query.fecha_publicacion || "DESC"  

    if(query.tittle){
        wheres.tittle = {[Op.iLike]:`%${query.tittle}%`}
    }

    try {
      let getUser = await User.findOne({ where: { id: idUser } });
      let allServices = await getUser.getPostulaciones({
        where: wheres,
        order: [["fecha_publicacion", fecha_publicacion]],   
        attributes: { exclude: ["UserId"] },
        include: [
          {
            model: Job,
            through: {
              attributes: [],
            },
          },

        ],
      });
  
      return res.status(200).json({
        status: "error",
        message: "Extraccion exitosa",
        result: allServices,
      });
    } catch (error) {
      return res.status(400).json({
        status: "error",
        message: error.message,
      });
    }
};

  module.exports = {
    getAllMyServices,
    getAllMyTrabajos,
    getAllMyPostulaciones,
  }
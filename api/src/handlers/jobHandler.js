const { Job, User } = require("../connection/db");
const { getDbJob } = require("../controllers/jobController");
const {createProduct} = require ("../services/stripe")

const getAllJobs = async (req, res) => {
  try {
    const allJob = await Job.findAll();

    return res.status(200).json({
      status: "success",
      message: "Extraccion exitosa",
      result: allJob,
    });
  } catch (error) {
    return res.status(400).json({
      status: "error",
      message: error.message
    });
  }
};

const getIdJob= async (req, res) => {
  let idJob = req.params.id
  try {
    const allJob = await Job.findOne({
      where: {id: idJob},
      include: {
        model: User,
        attributes: { exclude: ['password', 'role'] },
        through: { 
          attributes:[]
        }
      }
    });

    return res.status(200).json({
      status: "success",
      message: "Extraccion exitosa",
      result: allJob,
    });
  } catch (error) {
    return res.status(400).json({
      status: "error",
      message: error.message,
    });
  }
};

const createJob = async (req, res) => {
  let newJob = req.body;

  try {
    
   const product = await createProduct(newJob.name)
   newJob.stripeproductid = product.id
    let jobCreated = await Job.create(newJob);
   

    return res.status(200).json({
      status: "success",
      message: "Job creado correctamente",
      job: jobCreated
    });  } catch (error) {
    return res.status(400).json({
      status: "error",
      message: error.message,
    });
  }
};

const deleteJob = async(req, res)=>{
  let idJob = req.params.id
  try {
    const allJob = await Job.destroy({
      where: {
        id: idJob
      }
    })

    if(allJob == 0)throw new Error("El Job que desea eliminar no existe")


    return res.status(200).json({
      status: "success",
      message: "Se elimino exitosamente el Job",
    });
  } catch (error) {
    return res.status(400).json({
      status: "error",
      message: error.message,
    });
  }
}

const actulizarJob = async(req, res)=>{
  let idJob = Number(req.params.id)
  let newDatos = req.body

  try {
    let job = await Job.update(
      newDatos, 
      {
        where: {
          id: idJob
        }
      }
    )

    return res.status(200).json({
      status: "success",
      message: "Se actualizo exitosamente el Job",
      job,
      idJob,
      newDatos
 
    });
  } catch (error) {
    return res.status(400).json({
      status: "error",
      message: error.message,
    });
  }
}



module.exports = {
  getAllJobs,
  getIdJob,
  createJob,
  deleteJob,
  actulizarJob
};

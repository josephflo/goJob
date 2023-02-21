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

const creacionDeJobsParaPruebas = async(req, res)=>{
  let newJob1 = {
    name: "Albañil",
    description: "Construccion y reparacion de casas"
  }
  let newJob2 = {
    name: "Mecanico",
    description: "Reparacion de autmoviles"
  }
  let newJob3 = {
    name: "Dentista",
    description: "Cuidado y curacion de los dientes"
  }
  let newJob4 = {
    name: "Plomero",
    description: "Instalacion y reparacion de tuberias"
  }
  let newJob5 = {
    name: "Pintor de casas",
    description: "Pintado de casas"
  }
  let newJob6 = {
    name: "Arquitecto",
    description: "Diseño de contrucciones"
  }
  let newJob7 = {
    name: "Programador web",
    description: "Creacion y mantenimiento de sitios web"
  }
  let newJob8 = {
    name: "Pastelero",
    description: "Creacion de pasteles"
  }

  try {
    let jobCreated1 = await Job.create(newJob1);
    let jobCreated2 = await Job.create(newJob2);
    let jobCreated3 = await Job.create(newJob3);
    let jobCreated4 = await Job.create(newJob4);
    let jobCreated5 = await Job.create(newJob5);
    let jobCreated6 = await Job.create(newJob6);
    let jobCreated7 = await Job.create(newJob7);
    let jobCreated8 = await Job.create(newJob8);

    return res.status(200).json({
      status: "success", 
      message: "Job de prueba agregados correctamente"
    })

  } catch (error) {
    return res.status(200).json({
      status: "error", 
      message: error.message
    })
  }





}

module.exports = {
  getAllJobs,
  getIdJob,
  createJob,
  deleteJob,
  actulizarJob,
  creacionDeJobsParaPruebas
};

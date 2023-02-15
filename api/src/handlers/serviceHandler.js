const {Service} = require ("../connection/db")
const {getDbService} = require ("../controllers/serviceController")
const axios = require('axios');

const getAllService = async (req, res) =>{
    try{
        
        let servicios = await getDbService();
        res.status(200).send(servicios);

    }catch(error){
        res.status(400).send(error);
    }
}

const getIdService = async (req, res) =>{

    let id = req.params.id;

    try{

    let servicio = await getDbService();

    if(id){

        let busqueda = await servicio.filter (e => e.id === id);

        busqueda.length ?
        res.status(200).json(busqueda) :
        res.status(404).send("Servicio no encontrado.");
    }

    }catch(error){

    console.log(error);
  }   

}

const postService = async (req, res) => {
    try{ 

        let{ 
            tittle, 
            description,
            location,
            presupuesto
            } = req.body

        let creacionServicio = await Service.create({ 
            tittle,
            description,
            location,
            presupuesto});
        
        res.send('Nuevo servicio agregado.')

    }catch(error){

        console.log(error)
    }
}


module.exports = {
    getAllService,
    getIdService,
    postService,
}
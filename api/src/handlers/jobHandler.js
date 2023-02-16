const {Job, User} = require("../connection/db");
const {getDbJob} = require("../controllers/jobController");

const getAllJobHandler = async(req,res) =>{
    try{
        await getDbJob();
        const allJob = await Job.findAll();
        res.status(200).send(allJob);
    }catch(error){
        throw Error(error.message)
    }
}

const getIdJobHandler = async(req,res) =>{
    let id = req.params.id
    const allJob = await Job.findAll();

    if(id){
        let jobId = await allJob.filter(element => element.id == id)
        jobId.length ?
        res.status(200).json(jobId) :
        res.status(404).send("No se encontro el Job")
    }
}

const postJobHandler = async (req,res) =>{
    try{
        let{
            name,
            description,
        } = req.body

        let jobCreated = await Job.create({
            name,
            description,

        })
        /////

        res.status(200).send(jobCreated);
    }catch(error){
        throw Error(error.message)
    }
}

module.exports = {
    getAllJobHandler,
    getIdJobHandler,
    postJobHandler,
}
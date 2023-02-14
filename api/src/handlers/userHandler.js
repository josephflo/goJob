const {Job, Service, User} = require ("../connection/db")
const {getDbUser} = require ("../controllers/userController")

const getAllUsersHandler = async (req,res) =>{
    const name = req.query.firstName;
    let userTotal = await getDbUser();

    if(name){
        let userName = await userTotal.filter (element => element.name.toLowerCase().includes(firstName))
        userName.length?
        res.status(200).send(userName) :
        res.status(404).send("No se encuentra esa persona")
    }else{
        res.status(200).send(userTotal)
    }
}

const getIdUserHandler = async (req,res) =>{
    const id = req.params.id;
    const userTotal = await getDbUser();
    if(id){
        let userId = await userTotal.filter (element => element.id == id)
        userId.length?
        res.status(200).json(userId) :
        res.status(404).send("No encontre al Usuario")
    }
}

const postUserHandler = async (req,res) => {
    try{
        let{
            firstName,
            lastName,
            email,
            password,
            city,
            image,
            phone,
            address,
            role,
        } = req.body

        let userCreated = await User.create({
            firstName,
            lastName,
            email,
            password,
            city,
            image,
            phone,
            address,
            role,
        });
        /// Por aca puede faltar agregar algo de otra tabla
        res.status(200).send(userCreated)
    }catch(error){
        console.log(error)
    }
}


module.exports = {
    getAllUsersHandler,
    getIdUserHandler,
    postUserHandler,

}
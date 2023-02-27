const { Router} = require('express');
const { auth } = require("../middlewares/auth")
const router = Router();
const userHandlers = require("../handlers/userHandler")
const {createCheckoutHandler, productCreateHandler, priceCreatedHandler} = require("../handlers/stripeHandler")




/*****GET ****** */
router.get("/", userHandlers.getAllUser);
router.get("/get/:id", userHandlers.getUserID);
router.get("/friend", auth, userHandlers.getFriends)
//router.get("/profile", auth, userHandlers.getFriends)

router.get("/services", auth, userHandlers.getAllMyService)

router.get("/token", auth, userHandlers.decifrarToken);


/****** POST ****** */
router.post("/register", userHandlers.createUser);//
router.post("/register/img", userHandlers.uploadImg);//

router.post("/service", auth, userHandlers.createServer)//

router.post("/login", userHandlers.login)//
router.post("/login/auth", userHandlers.loginAuth)//


router.post("/friend", auth, userHandlers.addFriend)//

router.post("/service/postular/:idService", auth, userHandlers.postularService)

router.post("/service/elegir/trabajador", auth, userHandlers.elegirTrabajador)


router.post("/login", userHandlers.login)
router.post("/friend", auth, userHandlers.addFriend)

/****** PUT ******* */
router.put("/service/:idService", auth, userHandlers.actualizarService)//

router.put("/service/calificar/:idService", auth, userHandlers.calificarService)//
router.put("/update", auth, userHandlers.putUser)


/******* DELETE ******* */
router.delete("/friend", auth, userHandlers.deleteFriend)
router.delete("/job", auth, userHandlers.deleteJob)
router.delete("/delete", auth, userHandlers.deleteUser)

router.delete("/service/:idService", auth, userHandlers.deleteService)//

router.delete("/service/postular/:idService", auth, userHandlers.deletePostuleService)


// probando
router.post("/register2", async(req,res)=>{
    let newUser = req.body;
  
    let error = false;
  
    try {
      if(!newUser) throw new Error("Mising data");
      
      if(req.files?.image){
        
        const result = await uploadImage(req.files.image.tempFilePath);
        if(result.error) error = true; // Si se produce un error al cargar la imagen, establecemos la variable de estado en verdadero
        newUser.imageurl = result.secure_url;
        newUser.imagePublicId = result.imagePublicId;
      } else {
        newUser.imageurl = "sin foto";
        newUser.imagePublicId = "sin foto";
      }
  
      let userCreated = newUser
        
         
  
      return res.status(200).json({
        status: "success",
        message: "Usuario creado correctamente",
        result: userCreated,
        jobs: "Jobs agregados correctamente",
        error: error // Agregamos la variable de estado a la respuesta
      });
    } catch (error) {
      return res.status(404).json({
        status: "error",
        message: error.message,
        error: error || true // Establecemos la variable de estado en verdadero si se produce un error en cualquier lugar del bloque try-catch
      });
    }
  })





module.exports = router;

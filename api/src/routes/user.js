const { Router} = require('express');
const { auth } = require("../middlewares/auth")
const router = Router();
const userHandlers = require("../handlers/userHandler")
const userHandlers2 = require("../handlers/userHanlderMyServices")
const notifyHandler = require("../handlers/notifyUser")
const {createCheckoutHandler, productCreateHandler, priceCreatedHandler} = require("../handlers/stripeHandler")




/*****GET ****** */
router.get("/", userHandlers.getAllUser);
router.get("/get/:id", userHandlers.getUserID);
router.get("/friend", auth, userHandlers.getFriends)
//router.get("/profile", auth, userHandlers.getFriends)

router.get("/services", auth, userHandlers.getAllMyService)
router.get("/token", auth, userHandlers.decifrarToken);

router.get("/services/MyServices", auth, userHandlers2.getAllMyServices)
router.get("/services/MyTrabajos", auth, userHandlers2.getAllMyTrabajos)
router.get("/services/Postulaciones", auth, userHandlers2.getAllMyPostulaciones)


/****** POST ****** */
router.post("/register", userHandlers.createUser);//
router.post("/register/img", userHandlers.uploadImg);//

router.post("/service", auth, userHandlers.createService)//


router.post("/friend", auth, userHandlers.addFriend)//

router.post("/service/postular/:idService", auth, userHandlers.postularService)

router.post("/service/elegir/trabajador", auth, userHandlers.elegirTrabajador)


router.post("/friend", auth, userHandlers.addFriend)

//CONTACTAR
router.post("/contact/:idProfessional", auth, notifyHandler.contactarProfessional)


/****** PUT ******* */
//image service
router.put("/service/img/:id", auth, userHandlers.putServiceImg)

router.put("/service/:idService", auth, userHandlers.actualizarService)//

router.put("/service/calificar/:idService", auth, userHandlers.calificarService)//
router.put("/service/pagar/review", auth, userHandlers.pagarProducto)//

router.put("/update", auth, userHandlers.putUser)



/******* DELETE ******* */
router.delete("/friend", auth, userHandlers.deleteFriend)
router.delete("/job", auth, userHandlers.deleteJob)
router.delete("/delete", auth, userHandlers.deleteUser)

router.delete("/service/:idService", auth, userHandlers.deleteService)//

router.delete("/service/postular/:idService", auth, userHandlers.deletePostuleService)





module.exports = router;

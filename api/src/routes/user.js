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



router.post("/friend", auth, userHandlers.addFriend)//

router.post("/service/postular/:idService", auth, userHandlers.postularService)

router.post("/service/elegir/trabajador", auth, userHandlers.elegirTrabajador)


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





module.exports = router;

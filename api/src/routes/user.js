const { Router} = require('express');
const { auth } = require("../middlewares/auth")
const router = Router();
const userHandlers = require("../handlers/userHandler")
const {createCheckoutHandler, productCreateHandler, priceCreatedHandler} = require("../handlers/stripeHandler")




/*****GET ****** */
router.get("/", userHandlers.getAllUser);
router.get("/get/:id", userHandlers.getUserID);
router.get("/friend", auth, userHandlers.getFriends)

router.get("/services", auth, userHandlers.getAllService)

router.get("/token", auth, userHandlers.decifrarToken);


/****** POST ****** */
router.post("/register", userHandlers.createUser);//
router.post("/service", auth, userHandlers.createServer)//

router.post("/login", userHandlers.login)//
router.post("/friend", auth, userHandlers.addFriend)//

router.post("/service/postulate/:idService", auth, userHandlers.postularService)

router.post("/service/elegir/trabajador", auth, userHandlers.elegirTrabajador)


router.post("/login", userHandlers.login)
router.post("/friend", auth, userHandlers.addFriend)

/****** PUT ******* */
router.put("/service/:idService", auth, userHandlers.actualizarService)

router.put("/service/finalizar/:idService", auth, userHandlers.serviceFinalizado)
router.put("/service/calificar/:idService", auth, userHandlers.calificarService)


/******* DELETE ******* */
router.delete("/friend", auth, userHandlers.deleteFriend)
router.delete   ("/job", auth, userHandlers.deleteJob)

router.delete("/service/:idService", auth, userHandlers.deleteService)//

router.delete("/service/postulate/:idService", auth, userHandlers.deletePostuleService)

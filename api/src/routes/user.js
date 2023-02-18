const { Router} = require('express');
const { auth } = require("../middlewares/auth")
const router = Router();
const userHandlers = require("../handlers/userHandler")
/*****GET ****** */
router.get("/", userHandlers.getAllUser);//
router.get("/get/:id", userHandlers.getUserID);//
router.get("/friend", auth, userHandlers.getFriends)//

router.get("/services", auth, userHandlers.getAllService)//
router.get("/token", auth, userHandlers.decifrarToken);//


/****** POST ****** */
router.post("/register", userHandlers.createUser);//
router.post("/service", auth, userHandlers.createServer)//

router.post("/login", userHandlers.login)//
router.post("/friend", auth, userHandlers.addFriend)//

router.post("/postulate/service/:idService", auth, userHandlers.postularService)



/****** PUT ******* */
router.put("/service/:idService", auth, userHandlers.actualizarService)//
router.put("/update", auth, userHandlers.putUser)//

/******* DELETE ******* */
router.delete("/friend", auth, userHandlers.deleteFriend)//

router.delete("/service/:idService", auth, userHandlers.deleteService)//

router.delete("/postulate/service/:idService", auth, userHandlers.deletePostuleService)






module.exports = router;

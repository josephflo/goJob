const { Router} = require('express');
const { auth } = require("../middlewares/auth")
const router = Router();
const userHandlers = require("../handlers/userHandler")



/*****GET ****** */
router.get("/", userHandlers.getAllUser);
router.get("/get/:id", userHandlers.getUserID);
router.get("/friend", auth, userHandlers.getFriends)

router.get("/services", auth, userHandlers.getAllService)

router.get("/token", auth, userHandlers.decifrarToken);

 
/****** POST ****** */
router.post("/register", userHandlers.createUser);
router.post("/job", auth, userHandlers.addJob)
router.post("/service", auth,userHandlers.createService)

router.post("/login", userHandlers.login)
router.post("/friend", auth, userHandlers.addFriend)

/****** PUT ******* */
router.put("/service/:idService", auth, userHandlers.actualizarService)

/******* DELETE ******* */
router.delete("/friend", auth, userHandlers.deleteFriend)
router.delete   ("/job", auth, userHandlers.deleteJob)

router.delete("/service/:idService", auth, userHandlers.deleteService)




module.exports = router;

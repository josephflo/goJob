const { Router} = require('express');
const { auth } = require("../middlewares/auth")
const router = Router();
const userHandlers = require("../handlers/userHandler")
/*****GET ****** */
router.get("/", auth, userHandlers.getAllUser);
router.get("/get/:id", userHandlers.getUserID);

router.get("/token", auth, userHandlers.decifrarToken);


/****** POST ****** */
router.post("/register", userHandlers.postUser);
router.post("/login", userHandlers.login)
router.post("/friend", auth, userHandlers.addFriend)

/******* DELETE ******* */
router.delete("/friend", auth, userHandlers.deleteFriend)



module.exports = router;

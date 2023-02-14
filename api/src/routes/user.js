const { Router} = require('express');

const router = Router();
const userHandlers = require("../handlers/userHandler")
/*****GET ****** */
router.get("/", userHandlers.getAllUser);
router.get("/:id", userHandlers.getUserID);

/****** POST ****** */
router.post("/register", userHandlers.postUser);
router.post("/login", userHandlers.login)





module.exports = router;

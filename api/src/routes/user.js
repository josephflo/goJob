const { Router} = require('express');

const router = Router();
const {getAllUsersHandler, getIdUserHandler, postUserHandler } = require("../handlers/userHandler")
const axios = require('axios');
const {Job, Service, User} = require('../connection/db')

router.get("/", getAllUsersHandler);
router.get("/:id", getIdUserHandler);
router.post("/register", postUserHandler);


module.exports = router;

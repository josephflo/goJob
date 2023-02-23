const { Router} = require('express');
const jobHandlers = require("../handlers/jobHandler");
const { auth, verifyRole } = require('../middlewares/auth');

const router = Router();
/*******GET ********* */
router.get("/", jobHandlers.getAllJobs);
router.get("/:id", jobHandlers.getIdJob);

/***** POST ******* */
router.post("/create", jobHandlers.createJob);

/****** DELETE ******** */
router.delete("/:id", jobHandlers.deleteJob);

/******** PUT ********* */
router.put("/:id", jobHandlers.actulizarJob);



module.exports = router;
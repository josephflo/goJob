const { Router} = require('express');
const {
    getAllJobHandler,
    getIdJobHandler,
    postJobHandler,} = require("../handlers/jobHandler")

const router = Router();

router.get("/", getAllJobHandler);
router.get("/:id", getIdJobHandler);

router.post("/", postJobHandler);


module.exports = router;
const { Router} = require('express');
const router = Router();
const axios = require('axios');
const { auth } = require("../middlewares/auth")

const serviceHandlers = require('../handlers/serviceHandler');

router.get('/', serviceHandlers.getAllServices);
router.get('/:id', serviceHandlers.getIdService);


module.exports = router;
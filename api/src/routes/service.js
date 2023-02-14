const { Router} = require('express');
const router = Router();
const axios = require('axios');
const {getAllService,  getIdService, postService} = require('../handlers/serviceHandler');



router.get('/service', getAllService());
router.get('/service/:id', getIdService());
router.post('/service', postService());



module.exports = router;
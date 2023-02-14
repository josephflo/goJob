const { Router} = require('express');
const router = Router();
const axios = require('axios');
const {getAllService,  getIdService, postService} = require('../handlers/serviceHandler');



router.get('/', getAllService());
router.get('/:id', getIdService());
router.post('/', postService());



module.exports = router;
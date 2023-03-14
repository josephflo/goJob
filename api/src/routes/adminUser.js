const { Router} = require('express');
const router = Router();
const axios = require('axios');
const { auth } = require("../middlewares/auth")

const adminHandler = require('../handlers/adminHander');

router.get("/dashboard", auth, adminHandler.getInfoDashboard)



/**************** DELETE ******************** */
router.delete("/user/delete", auth,  adminHandler.deleteUser)
router.delete("/service/delete", auth, adminHandler.deleteService)

/************** PUT ***************** */
router.put("/user/update", auth, adminHandler.putUserAdmin)
router.put("/service/active", auth, adminHandler.activeService)




module.exports = router;

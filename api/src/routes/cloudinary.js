const { Router} = require('express');
const router = Router();
const {imageUploadHandler,
        imageDeleteHandler,
        allImageSearchHandler,
        imageFilterHandler} = require("../handlers/cloudinaryHandler")

// estas rutas no tienen una funcion directa, las rutas funcionales estan en createUser y putUser para subir y modificar 
// imagenes en el perfil del usuario

router.post("/uploadImage", imageUploadHandler) // sube una imagen

router.post("/deleteImage", imageDeleteHandler) // borras una imagen

router.get("/", allImageSearchHandler)//obtienes todas las imagenes

router.get("/imagefilter/:foldername",imageFilterHandler)//obtienes solo las imagenes con el nombre de la carpeta




module.exports = router;
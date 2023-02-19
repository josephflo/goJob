const cloudinary = require("cloudinary").v2;

// aqui se realiza la conexion debes poner tus datos si tienes ya una cuenta
cloudinary.config({
  cloud_name: 'gojobs',   
  api_key: '651828695548963',
  api_secret: 'SORomBaj_eRb1A1oD5mxVlKE77Q',
});

// con esta funcion subimos archivos a cloudinary 
async function uploadImage (filePath) { // file path es la direccion desde lo envias deste tu pc
  return cloudinary.uploader.upload(filePath, {
    // aqui pones las propiedades de la foto
    folder: "profile"  // nombre del folder en cloudinary se crea automaticamente al subir la primera foto
    //height:
    //width: 
    //etc puedes agregar otras propiedades a la foto 
  })
}

//dale node y el cambia la ruta de tu archivo para ver el urlimage y 
//poder usarla con el link que arroja el console.log

//console.log(uploadImage("larutadetuimagen"))

// para borrar imagenes requerimos el publicID en el modelo user se encuentra como imagePublicId este
//es el que debemos usar para borrarla una vez borrada usamos uploadImage para cargar la nueva
  async function deleteImage (publicId) {
  cloudinary.uploader.destroy(publicId)
}

module.exports = {
  cloudinary,
  uploadImage,
  deleteImage
}
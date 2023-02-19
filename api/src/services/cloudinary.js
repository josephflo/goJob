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
//dale node y el archivo para ver el urlimage y poder usarla
//console.log(uploadImage("larutadetuimagen"))

module.exports = {
  cloudinary,
  uploadImage
}
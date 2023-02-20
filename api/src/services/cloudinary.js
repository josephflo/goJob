const cloudinary = require("cloudinary").v2;


// aqui se realiza la conexion debes poner tus datos si tienes ya una cuenta
cloudinary.config({
  cloud_name: 'gojobs',   
  api_key: '651828695548963',
  api_secret: 'SORomBaj_eRb1A1oD5mxVlKE77Q',
});

// con esta funcion subimos archivos a cloudinary 
async function uploadImage (filePath) { // file path es la direccion desde lo envias deste tu pc
  return await cloudinary.uploader.upload(filePath, {
    // aqui pones las propiedades de la foto
    folder: "profile"  // nombre del folder en cloudinary se crea automaticamente al subir la primera foto
    //height:
    //width: 
    //etc puedes agregar otras propiedades a la foto 
  })
}

// para borrar imagenes requerimos el publicID en el modelo user se encuentra como imagePublicId este
//es el que debemos usar para borrarla una vez borrada usamos uploadImage para cargar la nueva
  async function deleteImage (publicId) {
  await cloudinary.uploader.destroy(publicId)
}

//con esta funcion se obtienen todas las imagenes que estan en cloudinary
async function searchAllImages() {
  const searchResult = await cloudinary.search
    .expression('resource_type:image') // si quisieramos podriamos buscarlo por folder con folder:nombre de la carpeta
    .sort_by('public_id', 'desc')
    .execute();
  return searchResult;
}

async function searchFilterImages(folderName) {
  const searchFilterResult = await cloudinary.search
    .expression(`folder: ${folderName}`) // si quisieramos podriamos buscarlo por folder con folder:nombre de la carpeta
    .sort_by('public_id', 'desc')
    .execute();
  return searchFilterResult;
}

module.exports = {
  cloudinary,
  uploadImage,
  deleteImage,
  searchAllImages,
  searchFilterImages
}
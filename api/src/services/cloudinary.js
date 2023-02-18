const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: 'gojobs',
  api_key: '651828695548963',
  api_secret: 'SORomBaj_eRb1A1oD5mxVlKE77Q',
});

async function uploadImage (filePath) {
  return cloudinary.uploader.upload(filePath, {
    folder: "profile"
  })
}

module.exports = {
  cloudinary,
  uploadImage
}
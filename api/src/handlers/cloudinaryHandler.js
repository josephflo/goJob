const { uploadImage,
         deleteImage,
        searchAllImages,
        searchFilterImages} = require("../services/cloudinary")
const fs = require("fs-extra")

 const imageUploadHandler = async (req,res)=>{    
    try {   
            
        const result = await uploadImage(req.files.image.tempFilePath);

        await fs.unlink(req.files.image.tempFilePath)          

            res.json(result)
                
    } catch (error) {
            res.json({ error: error})
            } }

 const imageDeleteHandler = async (req,res)=>{    
    try {   
            const {publicId} = req.body

            const delet = await deleteImage (publicId)
                    
            res.json({
                imagen:"Borrada Exitosamente"
            })
                
    } catch (error) {
            res.json({ error: error})
            } }

const allImageSearchHandler = async (req,res)=>{    
    try {   
            
        const search = await searchAllImages()
                    
            res.json(search)
                
    } catch (error) {
            res.json({ error: error})
            } }

            
const imageFilterHandler = async (req,res)=>{    
    try {   
            const{folderName} = req.body    
        const filter = await searchFilterImages (folderName)
                    
            res.json(filter)
                
    } catch (error) {
            res.json({ error: error})
            } }


module.exports = {
    imageUploadHandler,
    imageDeleteHandler,
    allImageSearchHandler,
    imageFilterHandler

}
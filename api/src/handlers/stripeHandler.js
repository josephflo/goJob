const {createSession, createProduct, createPrice,getProductById,deleteProduct,listProducts,listPrices} = require("../services/stripe")

const createCheckoutHandler = async (req,res)=>{    
try {   

    const {priceId} = req.body
    const session = await createSession(priceId)
        
    res.json(session)
    
} catch (error) {
    res.json({ error: error})
} }

const productCreateHandler = async (req,res)=>{    
try {   
    
    const {name}=req.body

    const idProduct = await createProduct(name)

    res.json(idProduct)
    
} catch (error) {
    res.json({ error: error.message})
}}

const productByIdHandler = async (req,res)=>{    
    try {   
        
        const {idProduct}=req.body

        const product = getProductById(idProduct)

        res.json(product)
        
    } catch (error) {

        res.json({ error: error.message})
    }}

 const delProductHandler = async (req,res)=>{    
        try {   
            
            const {idProduct}=req.body
    
            const delProduct = await deleteProduct(idProduct)
    
            res.json(delProduct)
            
        } catch (error) {
    
            res.json({ error: error.message})
        }}

 const priceCreatedHandler = async (req,res)=>{    
            try {   
                
                const {idprice,price}=req.body
        
                const idPrice = await createPrice(price,idprice)
        
                res.json(idPrice)
                
            } catch (error) {
        
                res.json({ error: error.message})
            }}

const allProductHandler = async (req,res)=>{    
                try { 
                          
                    const delProduct = await listProducts()
            
                    res.json(delProduct)
                    
                } catch (error) {
            
                    res.json({ error: error.message})
                }}

const allPriceProductHandler = async (req,res)=>{    
                try { 
                    const {producto_id}= req.params

                    const allPrices = await listPrices(producto_id)
            
                    res.json(allPrices)
                    
                } catch (error) {
            
                    res.json({ error: error.message})
                }}
            
   
module.exports = {
    productByIdHandler,
    createCheckoutHandler,
    productCreateHandler,
    priceCreatedHandler,
    delProductHandler,
    allProductHandler,
    allPriceProductHandler
}
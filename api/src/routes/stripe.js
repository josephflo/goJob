const { Router} = require('express');
const router = Router();
const {createCheckoutHandler, 
        productCreateHandler, 
        priceCreatedHandler,
        productByIdHandler,
        delProductHandler,
        allProductHandler,
        allPriceProductHandler} = require("../handlers/stripeHandler")


//estas rutas solo son para ver como funciona el api, las rutas funcionales vienen dentro de createservice 
//actualizarService y deleteService

router.post("/checkout", createCheckoutHandler) // creas un checkout

router.post("/createproduct", productCreateHandler) // creas un product enviando un nombre

router.post("/createprice", priceCreatedHandler)//creas un precio enviando un ID de producto

router.get("/search/:idproduct",productByIdHandler)//obtiene informacion de un producto determinado

router.delete("/delproducto/:idproduct",delProductHandler)//borrar producto por ID

router.get("/allProducts",allProductHandler)//muestra todos los productos en un array de objetos

router.get("/allPrices/:idproduct",allPriceProductHandler)//muestra todos los precios de un producto


module.exports = router;
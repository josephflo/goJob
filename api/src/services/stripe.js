const stripe = require('stripe')('sk_test_AAyUlMphrjfBjDBQMINfJPbZ00fxbQSK3d'); // aqui ponemos el secretKey del api
//el apisecret es de prueba por eso dice sk_test se pueden hacer compras de prueba

//la sesion es la instancia de pago 
async function createSession (priceId){ // se crea una sesion por cada llamada a la funcion
    
    const session = await stripe.checkout.sessions.create({ 
        line_items:[
            {
                price:priceId,  //se requiere un priceId para la compra que esta linkeado con su producto
                quantity: 1  //siempre la cantidad es 1 porque solo compran 1 servicio
            }
        ],
        payment_method_types:[
            "card"    //el metodo por defecto pago con tarjeta se pueden añadir otros
        ],
        mode: "payment",  // tipo de pago, como no es recurrente es payment
        success_url: "http://localhost:3001/success", // si el pago es exitoso se redirige aqui
        cancel_url: "http://localhost:3001/fail" // si el pago es cancelado o fallo redirige aqui
    })

    return session  // en sesion viene la url que da stripe para el formulario y se pueda realizar el pago
}

async function createProduct(name) {//name seria el nombre del usuario, username o ID, que creo el formato de pago
    //creas servicio como Albañileria, Plomeria pero es especifico del usuario
   
    const idProduct = await stripe.products.create({
      name: name      
    });
    
    return idProduct;//nos retorna el objeto completo donde viene el Id del producto para despues añadir precios

  }

  //'prod_NO4AgC06G5lhXh' un ID ejemplo que yo cree para hacer pruebas

async function createPrice(newPrice,idProduct){ // creas el precio para ese servicio de ese usuario
    const idPrice = await stripe.prices.create({
        unit_amount: newPrice,   //el precio de producto
        currency: 'usd',  // el tipo de moneda a 3 letras en este caso lo deje en dolares
        product: idProduct, // recibimos el Id del producto al cual le asignaremos un nuevo precio
      });

      return idPrice
}

async function getProductById(idProduct){ // obtenemos la informacion de un productoServicio 
    const product = await stripe.products.retrieve(
        idProduct
      );

      return product   //aqui podemos ver los ID de los precios relacionados con ese producto
}

async function deleteProduct(idProduct){  //si algun usuario por alguna razon quiere borrar sus datos de los pagos
    //aqui se borraria ese producto asociado al servicio
    const deleted = await stripe.products.del(
        idProduct
      );   

      return deleted
}

async function listProducts(){ //aqui buscamos todos los productos existentes si ningun tipo de filtro

    const allProducts = await stripe.products.list({
    
    });

      return allProducts
}

async function findProduct(product_id){
    const productFinded = stripe.products.list({limit: 1, active: true, ids: [product_id]})
        return productFinded
}

async function listPrices(producto_id){ //aqui buscamos todos los precios de un producto

    const prices = await stripe.prices.list({
        limit:1, 
        product: producto_id}
        );

      return prices
}

async function updatePrice(priceId,productPrice){ //aqui actualizamos un precio buscando su id

    const update = await stripe.prices.update(priceId, { unit_amount: productPrice, currency });

    return update
}




module.exports={
    stripe,
    createProduct,
    createPrice,
    createSession,
    getProductById,
    deleteProduct,
    listProducts,
    listPrices,
    findProduct,
    updatePrice
    
}


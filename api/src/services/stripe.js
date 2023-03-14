require('dotenv').config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const {ENDPOINT_SECRET, FRONT_BASE_URL} = process.env
//el apisecret es de prueba por eso dice sk_test se pueden hacer compras de prueba




//la sesion es la instancia de pago
async function createSession(priceId, idProduct, product) {
  // se crea una sesion por cada llamada a la funcion
  try {
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price: priceId, //se requiere un priceId para la compra que esta linkeado con su producto
          quantity: 1, //siempre la cantidad es 1 porque solo compran 1 servicio
          
        },
      ],
      metadata: {
        idProduct: idProduct,
        ...product
      },
      payment_method_types: [
        "card", //el metodo por defecto pago con tarjeta se pueden añadir otros
      ],
      mode: "payment", // tipo de pago, como no es recurrente es payment

      success_url: `${FRONT_BASE_URL}stripe/${product.typeProfile}/${product.idContratista}/success/${idProduct}`, // si el pago es exitoso se redirige aqui
      //cancel_url: `${FRONT_BASE_URL}stripe/${product.typeProfile}/${product.idContratista}/success/${idProduct}`, // si el pago es cancelado o fallo redirige aqui
      cancel_url: `${FRONT_BASE_URL}stripe/${product.typeProfile}/${product.idContratista}/fail`, // si el pago es cancelado o fallo redirige aqui

    });

    return session; // en sesion viene la url que da stripe para el formulario y se pueda realizar el pago
  } catch (error) {
    //console.log(error.message);
    throw new Error(error.message) ;
  }

}

/********** LISTEN PAGAR ********** */
const eventListenComplete = async(req, res) => {

  const sig = req.headers["stripe-signature"];

  let event

  try {
    event = stripe.webhooks.constructEvent(req.body, sig, ENDPOINT_SECRET);
  } catch (err) {
    return res.status(409).send(`Webhook Error: ${err.message}`);
    
  }

  try {
    switch (event.type) {
      case 'payment_intent.succeeded':
        const paymentIntentSucceeded = event.data.object;
        /* El paymentIntentSucceeded contiene la informacion de la compra, como el id del producto para poder actualizar la base de datos*/
      return res.status(200).send(paymentIntentSucceeded)
  
  
      case "checkout.session.completed":
        const completed = event.data.object;
        let idSession = completed.id
        let {idProduct} = completed.metadata
   
        console.log("**************************************");
        console.log(idSession);
        console.log(idProduct);
        console.log("**************************************");

        let result = await pagarService(idSession, idProduct)
        

  
      return res.status(201).send(completed)
  
      default:
        return res.status(405)
    }
  } catch (error) {
    return res.status(407)

  }
 


};


async function createProduct(name, idContratista, idTrabajador, idService, typeProfile) {
  //name seria el nombre del usuario, username o ID, que creo el formato de pago
  //creas servicio como Albañileria, Plomeria pero es especifico del usuario
  try {
    const idProduct = await stripe.products.create({
      name: name,
      metadata: {
        idContratista: idContratista,
        idTrabajador: idTrabajador,
        idService: idService,
        typeProfile: typeProfile
      }
    });

    return idProduct; //nos retorna el objeto completo donde viene el Id del producto para despues añadir precios
  } catch (error) {
    //console.log(error.message);
    throw new Error(error.message) ;
  }
}

//'prod_NO4AgC06G5lhXh' un ID ejemplo que yo cree para hacer pruebas

async function createPrice(newPrice, idProduct) {
  // creas el precio para ese servicio de ese usuario
  try {
    const idPrice = await stripe.prices.create({
      unit_amount: newPrice, //el precio de producto
      currency: "usd", // el tipo de moneda a 3 letras en este caso lo deje en dolares
      product: idProduct, // recibimos el Id del producto al cual le asignaremos un nuevo precio
    });

    return idPrice;
  } catch (error) {
    console.log(error.message);
    throw new Error(error.message) ;
  }
}

async function getProductById(idProduct) {
  // obtenemos la informacion de un productoServicio
try {
  const product = await stripe.products.retrieve(idProduct);

  return product; //aqui podemos ver los ID de los precios relacionados con ese producto

} catch (error) {
  throw new Error(error.message)
}


}

async function deleteProduct(idProduct) {
  //si algun usuario por alguna razon quiere borrar sus datos de los pagos
  //aqui se borraria su nombre de usuario asociado a ese producto
  const deleted = await stripe.products.del(idProduct);

  return deleted;
}

async function listProducts() {
  //aqui buscamos todos los productos existentes si ningun tipo de filtro

  const allProducts = await stripe.products.list({});

  return allProducts;
}

async function listPrices(producto_id) {
  //aqui buscamos todos los precios de un producto

  const prices = await stripe.prices.list({ product: producto_id });

  return prices;
}

// const existingPrice = listPrices(producto_id).data.find(price => price.unit_amount === priceInCents);

// if (existingPrice) {

// } else {

// }

module.exports = {
  createProduct,
  createPrice,
  createSession,
  getProductById,
  deleteProduct,
  listProducts,
  listPrices,
  eventListenComplete
};

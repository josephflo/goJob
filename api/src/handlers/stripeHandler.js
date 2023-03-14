require('dotenv').config();

const stripe = require("stripe")(process.env.stripe);
const {ENDPOINT_SECRET} = process.env

const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const {
  createSession,
  createProduct,
  createPrice,
  getProductById,
  deleteProduct,
  listProducts,
  listPrices,
} = require("../services/stripe");
const { pagarService } = require('../controllers/serviceController');

const createCheckoutHandler = async (req, res) => {
  try {
    const { priceId } = req.body;
    const session = await createSession(priceId);

    res.json(session);
  } catch (error) {
    res.json({ error: error });
  }
};

const productCreateHandler = async (req, res) => {
  try {
    const { name } = req.body;

    const idProduct = await createProduct(name);

    res.json(idProduct);
  } catch (error) {
    res.json({ error: error.message });
  }
};

const productByIdHandler = async (req, res) => {
  try {
    const { idProduct } = req.body;

    const product = getProductById(idProduct);

    res.json(product);
  } catch (error) {
    res.json({ error: error.message });
  }
};

const delProductHandler = async (req, res) => {
  try {
    const { idProduct } = req.body;

    const delProduct = await deleteProduct(idProduct);

    res.json(delProduct);
  } catch (error) {
    res.json({ error: error.message });
  }
};

const priceCreatedHandler = async (req, res) => {
  try {
    const { idprice, price } = req.body;

    const idPrice = await createPrice(price, idprice);

    res.json(idPrice);
  } catch (error) {
    res.json({ error: error.message });
  }
};

const allProductHandler = async (req, res) => {
  try {
    const delProduct = await listProducts();

    res.json(delProduct);
  } catch (error) {
    res.json({ error: error.message });
  }
};

const allPriceProductHandler = async (req, res) => {
  try {
    const { producto_id } = req.params;

    const allPrices = await listPrices(producto_id);

    res.json(allPrices);
  } catch (error) {
    res.json({ error: error.message });
  }
};

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

module.exports = {
  productByIdHandler,
  createCheckoutHandler,
  productCreateHandler,
  priceCreatedHandler,
  delProductHandler,
  allProductHandler,
  allPriceProductHandler,
  eventListenComplete
};

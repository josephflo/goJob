const stripe = require('stripe')('tu_clave_de_api_de_stripe');

const paymentIntent = await stripe.paymentIntent.create({
    amount:2000,
    currency:"usd",
    payment_method_types: {enabled:true}
})
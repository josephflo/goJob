const { Router} = require('express');
const { auth } = require("../middlewares/auth")
const router = Router();
const userHandlers = require("../handlers/userHandler")
const {stripe} = require("../services/stripe")



/*****GET ****** */
router.get("/", userHandlers.getAllUser);
router.get("/get/:id", userHandlers.getUserID);
router.get("/friend", auth, userHandlers.getFriends)

router.get("/services", auth, userHandlers.getAllService)

router.get("/token", auth, userHandlers.decifrarToken);


/****** POST ****** */
router.post("/register", userHandlers.createUser);
router.post("/job", auth, userHandlers.addJob)
router.post("/service", auth, userHandlers.createServer)

router.post("/login", userHandlers.login)
router.post("/friend", auth, userHandlers.addFriend)

/****** PUT ******* */
router.put("/service/:idService", auth, userHandlers.actualizarService)

/******* DELETE ******* */
router.delete("/friend", auth, userHandlers.deleteFriend)
router.delete   ("/job", auth, userHandlers.deleteJob)

router.delete("/service/:idService", auth, userHandlers.deleteService)

// stripe pruebas
router. get("/stripe", async (req, res)=>{

    const priceId = "price_1MdI2KCTNvaxw8YUk94WWTK1"

    const session = await stripe.checkout.sessions.create({
        line_items:[
            {
                price:priceId,
                quantity: 1
            }
        ],
        payment_method_types:[
            "card"
        ],
        mode: "payment",
        success_url: "http://localhost:3001/success",
        cancel_url: "http://localhost:3001/fail"
    })

res.json(session)
})

router. get("/stripe/createproduct/:name", async (req, res)=>{
    const {name}=req.params

    const idProduct = await stripe.products.create({
        name: name,
      });

res.json(idProduct)

})

router. get("/stripe/createprice/:price", async (req, res)=>{
    const {price}=req.params

    const idPrice = await stripe.prices.create({
        unit_amount: price,
        currency: 'usd',
        product: 'prod_NO5T4nUaTpYHWE',
      });

res.json(idPrice)

})






module.exports = router;

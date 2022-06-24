const functions = require("firebase-functions");
const express = require("express");
const { request, response } = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51LDnSaSHUDwIvJlBYZSKts4Uik84h0zMTBhma8AgkTZyULVcCyWR2pP42uQ9HDxkJHh1p1RXfqARwQYxj0Drnkg500jjGQ3R73"
);

const app=express()

app.use(cors({origin:true}));
app.use(express.json());

app.post('/payment/create',async(req,res)=>{
    const total=req.query.total
    console.log('amount is ',total)
    const paymentIntent=await stripe.paymentIntents.create({
        amount:total,
        currency:'usd'
    })
    res.status(201).send({
        clientSecret:paymentIntent.client_secret,

    })
})

exports.api=functions.https.onRequest(app);
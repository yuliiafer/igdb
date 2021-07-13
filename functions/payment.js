// domain/.netlify/functions/payment
require('dotenv').config()

let stripe = require('stripe')(process.env.REACT_APP_STRIPE_SECRET_KEY);

exports.handler = async function ( event, context ) {
    if(event.body) {
    const { cart, shipping_fee, total_amount } = JSON.parse(event.body);
    console.log(cart);
    const calculateOrderAmount = () => {
        return shipping_fee + total_amount
    }
    try {
        const paymantIntent = await stripe.paymantIntents.create({
            amount: calculateOrderAmount(),
            currency: 'NOK'
        })
        return {
            statusCode: 200,
            body: JSON.stringify({clientSecret:paymantIntent.client_secret}),
        }
    } catch (error) {
        return {
            statusCode:500,
            body:JSON.stringify({mess:error.message}),
        }
    }
}
return {
    statusCode: 200,
    body: "Create payment",
}
}
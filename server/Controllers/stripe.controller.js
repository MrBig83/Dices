const initStripe = () => {
    const Stripe = require("stripe")
    console.log("Här så...");
    console.log(process.env.STRIPE_SECRET_KEY);
  return Stripe("sk_test_51N1QSvB5oF5Pgsvr9lqbW8OK5zAPEZqDtW0GPWY1Km9lMtWxitAXWLlsi5PIuUlLqtJpqKwTVccUgEVdnJmrE1Kv00Tjuq7jxN")
};

module.exports = { initStripe }
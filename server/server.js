require("dotenv").config()
const express = require("express")
const cors = require("cors")
const app = express()
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)
const cookieSession = require("cookie-session")

const { userRouter } = require("./Routes/user.router");
const { orderRouter } = require("./Routes/order.router")
const { productRouter } = require("./Routes/product.router")

const CLIENT_URL = "http://localhost:5173"

//Middlewares
app.use(cors({
    origin: "*",
}));

app.use(
    cookieSession({
      name: "session",
      keys: ["aVeryS3cr3tK3y"],
      maxAge: 1000 * 60 * 60 * 24, // 24 Hours
      sameSite: "strict",
      httpOnly: true,
      secure: false,
    })
  );

app.use(express.json())

//Add routers
app.use("/api", productRouter);
app.use("/api", orderRouter);
app.use("/api", userRouter);

app.get("/", (req, res) => {
    res.send("Hello from Express")
})

app.listen(3000, () => console.log("Server is up..."))
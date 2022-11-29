const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/user-routes");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const PORT = process.env.PORT || 5000;

const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(cors());
app.use("/api", router);
mongoose
  .connect(
    "mongodb+srv://edtech:redred1234@cluster0.u95hdad.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    app.listen(PORT);
    console.log("Database is connected to port 5000");
  })
  .catch((err) => console.log(err));

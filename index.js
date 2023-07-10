const express = require("express");
const cors = require("cors");
const dashboadRouter = require("./routes/dashboardRoute");
require("dotenv").config();
const mongoose = require("mongoose");

const {json, urlencoded} = express;

const app = express();
app.use(cors());
app.use(json());
app.use(urlencoded({extended:false}));

app.use("/dashboard", dashboadRouter);
mongoose.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0.y6yhged.mongodb.net/${process.env.MONGO_DB}`);


app.listen(process.env.PORT, ()=> console.log("serever is running at port "+ process.env.PORT))

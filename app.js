const express = require("express");
const mongoose = require("mongoose");
const postsRoute = require("./routes/post");
const cors = require("cors");
require("dotenv/config");


//execute express
const app = express();

//middleware - runs when you say go to a path 
app.use(cors());
//can't directly display without converting to json
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//routers are written in the routes folder to make the code cleaner
app.use('/posts', postsRoute);


//Routes 
app.get("/", (req, res) => {
    res.send("take us home");
})

//connect 

mongoose.connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => console.log("connected to DB!"));

//how to start listening to the server
app.listen(3000, console.log("live on 3000"));

// mongodb+srv://darshan:<password>@rest.r8dfn.mongodb.net/<dbname>?retryWrites=true&w=majority
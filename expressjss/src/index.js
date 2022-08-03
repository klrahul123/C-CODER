const mongoose= require("mongoose");
const dotenv=require("dotenv");
const express = require("express");
const path = require("path");
const app=express();

const cors = require("cors");


dotenv.config({path :'./config.env'});

const PORT= process.env.PORT;
require('./db/conne');
app.use(express.json());
app.use(cors())

const User= require('./model/userSchema');




const staticPath = path.join(__dirname, "../public");
//const templatePath = path.join(__dirname, "../templates/views");
//const partialsPath = path.join(__dirname, "../templates/partials");









app.use(require('./router/auth'));






//app.get("/about", (req , res) => {
   // res.render('about');
//});

//app.get("/k" , (req , res) => {
  //  res.send("hello kalua here <h1>Love you the most </h1>");
//});



app.get( "/r" , (req , res) => {
    res.render("404" , {
        error: "nikal laude ye page nhi h idhar" ,
    });
});

app.listen(PORT, () => {
    console.log(`listening to the port ${PORT}`);
});
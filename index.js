const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const ejs = require("ejs");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'/public')));

app.set("view engine","ejs");

app.get("/",(req,res)=>{
    res.render("index");
})

app.post("/",(req,res)=>{
    const name = req.body['name'];
    res.render("index",{"name":name})
})

app.listen(3000,()=>{
    console.log("Server Started at 3000");
})
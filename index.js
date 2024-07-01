require('dotenv').config();
const express=require("express");
const app=express();

app.get('/',(req,res)=>{
    res.send("Hello World");
})

app.get("/twitter",(req,res)=>{
    res.send("Twitter");
})

app.get("/login",(req,res)=>{
    res.send("Login");
})

app.get("/youtube",(req,res)=>{
    res.send("<h1>Chai Aur Code</h1>");
})

app.listen(process.env.PORT,()=>{
    console.log(`App is listening at port ${process.env.PORT}`);
})
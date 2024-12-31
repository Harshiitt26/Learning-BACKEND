import express from "express"; // ES MODULES JS
// const express = require('express')  COMMON JS

const app = express()
const port= 3000
app.get("/" ,(req,res)=>{
    res.send("Welcome to the Home Page")
})
app.get("/login" ,(req,res)=>{
    res.send("Enter your Login details.")
})
// restart application after every change ny ctrl C and npm run start

// require('dotenv').config()
import 'dotenv/config'

app.listen(process.env.PORT ,()=>{
    console.log(`app listening on PORT ${process.env.PORT} `)
})
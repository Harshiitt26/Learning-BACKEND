import express from "express"
const app = express()
import dotenv from 'dotenv';
dotenv.config();
import DBconnection from "./db/index.js"
DBconnection() // () means execution 


app.get("/",(req,res)=>{
    res.send("Welcome to Homepage.")
})

app.listen(process.env.PORT,()=>{
    console.log(`app is listening on port ${process.env.PORT}`)
})



/*
import mongoose from "mongoose"
import { DB_NAME } from "./constants.js";

;(async ()=>{
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error",(error)=>{
            console.log("Mr.Database is not connected.", error)
        throw(error)
        })
    }
    catch(error){
        console.log("Mr.Database is not connected.", error)
        throw(error)
    }
})()
*/

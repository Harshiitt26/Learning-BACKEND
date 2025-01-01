import mongoose from "mongoose"
import { DB_NAME } from "../constants.js"
import dotenv from 'dotenv';
dotenv.config();

const DBconnection = async ()=>{
    try{
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`Mr. Database is connected. DB HOST: ${connectionInstance.connection.host}`)
        // console.log(connectionInstance)
    }
    catch(error){
        console.log("Mr. Database is not connected", error)
        process.exit[1]
    }
}

export default DBconnection;
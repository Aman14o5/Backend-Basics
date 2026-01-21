import connectDB from "./db/index.js";
import dotenv from 'dotenv'

dotenv.config();

connectDB();







/*
import express from "express"
const app = express();

(async ()=> {
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error",(error) => {
            console.log("Error: ",error);
            app.listen(process.env.PORT,() => {
                console.log(`App is listening on PORT:${process.env.PORT}`);
            })
        })
    }catch(error){
        console.log("ERROR: ",error);
        throw error;
    }
})()
*/
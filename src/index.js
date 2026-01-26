import connectDB from "./db/index.js";
import dotenv from 'dotenv'
import { app } from "./app.js";

dotenv.config();

connectDB()
.then(() => {

    app.on("error",(error) => {
        console.log("Error: ",error);
        throw error;
    })


    app.listen(process.env.PORT || 8000,() => {
        console.log(`Server started at port:${process.env.PORT}`)
    })
})
.catch((error) => {
    console.log('MONGO db connection failed !!!!')
})







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
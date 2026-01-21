import mongoose, { modelNames, mongo } from "mongoose";
import { DB_NAME } from "../constants.js";


const connectDB = async () => {
    try{
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`\n Mongo DB Connected!! DB Host:${connectionInstance.connection.host}`);
    }catch(error){
        console.log("MongoDB connection error: ",error);
        process.exit(1);
    }
}

export default connectDB;
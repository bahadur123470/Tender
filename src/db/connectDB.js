import mongoose from "mongoose";
import { DB_Name } from "../constant.js";

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_Name}`)
        console.log(`\n MongoDB is connected to ${DB_Name} database !!
            DB Host: ${connectionInstance.connection.host}`)
    }
    catch (error) {
        console.log("MongoDB connection failed:" , error)
        process.exit(1)
    }
}

export default connectDB;  //export the function to use it in other files.  //export default
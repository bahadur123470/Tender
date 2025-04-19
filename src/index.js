import dotenv from "dotenv"
import connectDB from "./db/index.js"
import { app } from "./app.js"

dotenv.config({ path: ".env"})
connectDB()
.then( () => {
    app.on("error", (error) => {
        console.log("ERROR:" , error);
        throw error
    })
    app.listen(process.env.PORT || 6000 , () =>{
        console.log(`Server is running on port ${process.env.PORT}`)
    })
})
.catch( (err) => {
    console.log("MongoDB is failed to Connect" , err)
})
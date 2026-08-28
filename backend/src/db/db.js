import mongoose, { mongo } from "mongoose";
import {DB_NAME} from "../constants.js"

const connectDB = async() => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.DB_URI}/${DB_NAME}`)
        console.log(`Connected to DB!`)
    } catch (error) {
        console.log("Connection failed to DB!!", error)
    }
}

export { connectDB }
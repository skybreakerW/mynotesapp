import dotenv from "dotenv"
import express from "express";
import { app } from "./src/app.js"

dotenv.config({
    path: "./.env"
})

const port = process.env.PORT || 8080

connectDB()

app.listen(port, () => {
    console.log(`Listening on port ${port}...`)
})

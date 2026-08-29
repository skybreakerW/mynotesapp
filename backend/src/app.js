import express from "express";
import { Notes } from "./models/notes.model.js"
import cors from "cors" 

const app = express()

app.use(express.json())
app.use(cors())


app.post("/create", async (req,res) => {
    const data = req.body

    await Notes.create({
        title: data.title,
        description: data.description
    })

    res.status(201).json({
        message: "Note created successfully"
    })
})

app.get("/feed", async (req, res) => {

    const notes = await Notes.find()
    // res.send("Hello")
    res.status(200).json({
        message: "Notes fetched successfully",
        notes,
    })
})




export { app }
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

app.get("/notes", async (req, res) => {

    const notes = await Notes.find()
    // res.send("Hello")
    res.status(200).json({
        message: "Notes fetched successfully",
        notes,
    })
})

app.delete("/notes/:id", async(req, res) => {

    const id = req.params.id

    await Notes.findOneAndDelete({
        _id: id,
    })

    res.status(200).json({
        message: "Note deleted successfully."
    })
})




export { app }
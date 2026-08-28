import mongoose from "mongoose";

const noteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },

    description: {
        type: String
    }
},
{timestamps:true})

export const Notes = mongoose.model("Notes", noteSchema)
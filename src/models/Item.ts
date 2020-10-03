import mongoose from "mongoose";

const itemSchema: mongoose.Schema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
})

mongoose.model("items", itemSchema);

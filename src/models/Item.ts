import mongoose, { Schema } from "mongoose";

const itemSchema: Schema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
})

mongoose.model("items", itemSchema);

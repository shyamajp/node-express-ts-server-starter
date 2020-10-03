import mongoose, { Schema } from "mongoose";
import { IItem } from "../interfaces/Item";

const itemSchema: Schema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
})

export default mongoose.model<mongoose.Document & IItem>("items", itemSchema);

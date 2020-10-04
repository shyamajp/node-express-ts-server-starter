import mongoose from "mongoose";
const Item = mongoose.model("items");

export const getItems = async () => {
    const items = await Item.find();
    return items;
};

export const getItem = async (id: string) => {
    const item = await Item.findById(id);
    return item;
};

export const createItem = async (name: string) => {
    const item = await new Item({ name }).save();
    return item;
};

export const updateItem = async (id: string, name: string) => {
    const item = await Item.findByIdAndUpdate(id, { name });
    return item;
};

export const deleteItem = async (id: string) => {
    const item = await Item.findByIdAndDelete(id);
    return item;
};
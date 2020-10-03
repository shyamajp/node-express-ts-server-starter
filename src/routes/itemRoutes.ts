import express, { Request, Response } from "express";
import mongoose from "mongoose";

const Item = mongoose.model("items");

module.exports = (app: express.Application) => {
    app.get("/api/items", async (req: Request, res: Response) => {
        const items = await Item.find();
        res.send(items);
    })

    app.get("/api/items/:id", async (req: Request, res: Response) => {
        const { id } = req.params;
        const item = await Item.findById(id);
        res.send(item);
    })

    app.post("/api/items", async (req: Request, res: Response) => {
        const { name } = req.body;
        const item = await new Item({ name }).save();
        res.send(item);
    })

    app.put("/api/items/:id", async (req: Request, res: Response) => {
        const { id } = req.params;
        const { name } = req.body;
        const item = await Item.findByIdAndUpdate(id, { name });
        res.send(item);
    })

    app.delete("/api/items/:id", async (req: Request, res: Response) => {
        const { id } = req.params;
        const item = await Item.findByIdAndDelete(id);
        res.send(item);
    })
}
import { Application, Request, Response, Router } from "express";
import mongoose from "mongoose";

const Item = mongoose.model("items");

const router = Router();

export default (app: Application) => {
    app.use('/items', router);

    router.get("/", async (req: Request, res: Response) => {
        const items = await Item.find();
        res.send(items);
    })

    router.get("/:id", async (req: Request, res: Response) => {
        const { id } = req.params;
        const item = await Item.findById(id);
        res.send(item);
    })

    router.post("/", async (req: Request, res: Response) => {
        const { name } = req.body;
        const item = await new Item({ name }).save();
        res.send(item);
    })

    router.put("/:id", async (req: Request, res: Response) => {
        const { id } = req.params;
        const { name } = req.body;
        const item = await Item.findByIdAndUpdate(id, { name });
        res.send(item);
    })

    router.delete("/:id", async (req: Request, res: Response) => {
        const { id } = req.params;
        const item = await Item.findByIdAndDelete(id);
        res.send(item);
    })
}
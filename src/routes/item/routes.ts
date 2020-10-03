import { Application, Request, Response, Router } from "express";
import { getItems, getItem, createItem, updateItem, deleteItem } from "./handlers";

const router = Router();

export default (app: Application) => {
    app.use('/items', router);

    router.get("/", async (req: Request, res: Response) => {
        const items = await getItems();
        res.send(items);
    })

    router.get("/:id", async (req: Request, res: Response) => {
        const { id } = req.params;
        const item = await getItem(id);
        res.send(item);
    })

    router.post("/", async (req: Request, res: Response) => {
        const { name } = req.body;
        const item = await createItem(name);
        res.send(item);
    })

    router.put("/:id", async (req: Request, res: Response) => {
        const { id } = req.params;
        const { name } = req.body;
        const item = await updateItem(id, name);
        res.send(item);
    })

    router.delete("/:id", async (req: Request, res: Response) => {
        const { id } = req.params;
        const item = await deleteItem(id);
        res.send(item);
    })
}
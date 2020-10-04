import { Application, NextFunction, Request, Response, Router } from "express";
import { getItems, getItem, createItem, updateItem, deleteItem } from "./handlers";

const router = Router();

export default (app: Application) => {
    app.use('/items', router);
    router.get("/", async (req: Request, res: Response, next: NextFunction) => {
        try {
            const items = await getItems();
            res.send(items);
        } catch (err) {
            next(err);
        }
    })

    router.get("/:id", async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { id } = req.params;
            const item = await getItem(id);
            res.send(item);
        } catch (err) {
            next(err);
        }
    })

    router.post("/", async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { name } = req.body;
            const item = await createItem(name);
            res.send(item);
        } catch (err) {
            next(err);
        }
    })

    router.put("/:id", async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { id } = req.params;
            const { name } = req.body;
            const item = await updateItem(id, name);
            res.send(item);
        } catch (err) {
            next(err);
        }
    })

    router.delete("/:id", async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { id } = req.params;
            const item = await deleteItem(id);
            res.send(item);
        } catch (err) {
            next(err);
        }
    })
}
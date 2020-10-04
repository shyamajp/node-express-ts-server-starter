import { Application, NextFunction, Request, Response } from "express";
import { HTTP404Error } from "../../utils/HTTPErrors";

export default (app: Application) => {
    app.get("/", (req: Request, res: Response) => {
        res.send(`Hello, World!`);
    });

    app.use("*", (req: Request, res: Response, next: NextFunction) => {
        const err = new HTTP404Error();
        next(err);
    });
};
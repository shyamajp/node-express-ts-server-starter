import { NextFunction, Response } from "express";
import { HTTP404Error } from "./HTTPErrors";

const notFoundError = (err: Error, res: Response, next: NextFunction) => {
    if (err instanceof HTTP404Error)
        return res.status(err.code).send(err.message);
    next(err);
};

const clientError = (err: Error, res: Response, next: NextFunction) => {
    return res.status(400).send(err.message);
};

export default { notFoundError, clientError };
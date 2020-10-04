import { NextFunction, Response } from "express";
import { Error as MongooseError } from "mongoose";
import { MongoError } from "mongodb";
import { HTTP404Error } from "./HTTPErrors";

const notFoundError = (err: Error, res: Response, next: NextFunction) => {
    if (err instanceof HTTP404Error)
        return res.status(err.code).send(err.message);
    next(err);
};

const clientError = (err: Error, res: Response, next: NextFunction) => {
    if (err instanceof MongoError)
        return res.status(400).send("Mongo Error: " + err.message);
    if (err instanceof MongooseError.ValidationError)
        return res.status(400).send("Validation Error: " + err.message);
    if (err instanceof MongooseError.CastError)
        return res.status(400).send("Cast Error: " + err.message);
    if (err instanceof MongooseError.DocumentNotFoundError)
        return res.status(400).send("Docments Not Found Error: " + err.message);
    if (err instanceof MongooseError.MissingSchemaError)
        return res.status(400).send("Missing Schema Error: " + err.message);
    if (err instanceof MongooseError)
        return res.status(400).send("Mongoose Error: " + err.message);
    return res.status(400).send(err.message);
};

export default { notFoundError, clientError };

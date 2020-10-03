import express, { Request, Response } from "express";

module.exports = (app: express.Application) => {
    app.get("/", (req: Request, res: Response) => {
        res.send(`Tere! Your IP address is ${req.ip}`);
    })
}
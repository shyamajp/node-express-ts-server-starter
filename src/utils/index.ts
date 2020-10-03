import { Application } from "express";

interface Middleware {
    [key: string]: Function,
}

const applyMiddleware = (middleware: Middleware, app: Application) => {
    for (let func of Object.values(middleware)) {
        func(app);
    }
};

export { applyMiddleware };
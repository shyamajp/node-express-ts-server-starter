import { Application, Router } from "express";

interface Middleware {
    [key: string]: Function,
}

const applyMiddleware = (middleware: Middleware, app: Application | Router) => {
    for (let func of Object.values(middleware)) {
        func(app);
    }
};

const applyRoutes = (routes: Function[], app: Application | Router) => {
    for (const route of routes) {
        route(app);
    }
};

export { applyMiddleware, applyRoutes };
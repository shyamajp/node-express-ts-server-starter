import { Application, Router } from "express";

interface Middleware {
    [key: string]: Function,
}

const applyMiddleware = (middleware: Middleware, app: Application) => {
    for (let func of Object.values(middleware)) {
        func(app);
    }
};

const applyRoutes = (routes: Function[], router: Application | Router) => {
    for (const route of routes) {
        route(router);
    }
};


export { applyMiddleware, applyRoutes };
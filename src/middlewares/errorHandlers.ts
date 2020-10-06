import { Application, NextFunction, Request, Response, Router } from "express";
import ErrorHandler from "../utils/errorHandlers";

const handleNotFoundErrors = (router: Application | Router) => {
    router.use((err: any, req: Request, res: Response, next: NextFunction) => {
        ErrorHandler.notFoundError(err, res, next);
    });
};

const handleClientErrors = (router: Application | Router) => {
    router.use((err: any, req: Request, res: Response, next: NextFunction) => {
        ErrorHandler.clientError(err, res, next);
    });
};

export default { handleNotFoundErrors, handleClientErrors };
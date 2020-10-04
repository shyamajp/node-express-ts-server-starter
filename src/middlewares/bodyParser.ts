import { Application } from "express";
import bodyParser from "body-parser";

const handleBodyRequestParsing = (app: Application) => {
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
};

export { handleBodyRequestParsing };
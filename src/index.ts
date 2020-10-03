import express, { Application } from 'express';
import mongoose from 'mongoose';
import dotenv from "dotenv"
import middleware from "./middlewares";
import { applyMiddleware, applyRoutes } from "./utils";
import "./models";
import routes from "./routes";

dotenv.config()
const PORT: string | number = process.env.PORT || 3000;
const MONGO_URI: string = process.env.MONGO_URI || "mongodb://localhost:27017/test";

mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
});

const app: Application = express();

applyMiddleware(middleware, app);
applyRoutes(routes, app);

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
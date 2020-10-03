import express, { Application } from 'express';
import mongoose from 'mongoose';
import dotenv from "dotenv"
// import utils
import middleware from "./middlewares";
import { applyMiddleware } from "./utils";
// import models
import "./models/Item";
// import routes
import itemRoutes from "./routes/itemRoutes";
import healthRoutes from "./routes/healthRoutes";

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
itemRoutes(app);
healthRoutes(app);

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
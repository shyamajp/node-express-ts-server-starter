import express, { Application } from "express";
import dotenv from "dotenv";
dotenv.config();
import middleware from "./middlewares";
import errorHandlers from "./middlewares/errorHandlers";
import { applyMiddleware, applyRoutes } from "./utils";
import routes from "./routes";

const app: Application = express();

applyMiddleware(middleware, app);
applyRoutes(routes, app);
applyMiddleware(errorHandlers, app);

const PORT: string | number = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

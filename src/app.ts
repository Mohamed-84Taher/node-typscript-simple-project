import { config } from "dotenv";
import express, { Application, Request, Response, NextFunction } from "express";
import { ExceptionHandler } from "./middleware/exception.handler";
import { UnknownRoutesHandler } from "./middleware/unknownRoutes.handler";

config();

import uploadRoute from "./resources/upload/upload.controller";

const app: Application = express();

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send("Express with Typescript");
});

app.use(uploadRoute);

app.use("*", UnknownRoutesHandler);

app.use(ExceptionHandler);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server listenning on port ${PORT}`);
});

//* Import Packages and Types
import express, { Express, Response, Request, NextFunction } from "express";
import cors from "cors";
import indexRouter from "./features/index.route";
import Responses from "./modules/response";

//* Initialize Server
const app: Express = express();

//* Middleware for Modify Request
app.use(cors({ methods: "*", origin: "localhost" }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//* Define Routes
app.use(indexRouter);

//* Home Page
app.get("/", (req: Request, res: Response): any => {
  return res.status(200).json({
    success: true,
    message: "Welcome to Postaway with TypeScript !!!",
  });
});

//* Default Error Middleware
app.use((err: any, req: Request, res: Response, next: NextFunction): void => {
  return Responses.generateErrorResponse(res, 500, {
    message: "Internal Server Error",
  });
});

//* InCase SomeOne Go to Wrong Route
app.use((req: Request, res: Response, next: NextFunction): void => {
  return Responses.generateErrorResponse(res, 404, {
    message: "Unknown Resource",
  });
});
export default app;

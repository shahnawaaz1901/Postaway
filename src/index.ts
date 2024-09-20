//* Import Packages and Types
import express, { Express, Response, Request, NextFunction } from "express";
import cors from "cors";
import indexRouter from "./features/index.route";

//* Initialize Server
const app: Express = express();

//* Middleware for Modify Request
app.use(cors({ methods: "*", origin: "*" }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//* Define Routes
app.use(indexRouter);

//* Home Page
app.get("/", (req: Request, res: Response): any => {
  return res
    .status(200)
    .json({
      success: true,
      message: "Welcome to Postaway with TypeScript !!!",
    });
});

//* Default Error Middleware
app.use((err: any, req: Request, res: Response, next: NextFunction): any => {
  return res
    .status(500)
    .json({ success: false, message: "Internal Server Error" });
});

//* InCase SomeOne Go to Wrong Route
app.use((req: Request, res: Response, next: NextFunction) => {
  return res.status(404).json({ success: false, message: "Unknown Resource" });
});
export default app;

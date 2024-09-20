import { Router, Request, Response, NextFunction } from "express";
import CommentController from "./comment.controller";

const commentRouter = Router();
const commentController: CommentController = new CommentController();

commentRouter.post(
  "/get/:_id",
  (req: Request, res: Response, next: NextFunction): void => {}
);

commentRouter.post(
  "/create/:_id",
  (req: Request, res: Response, next: NextFunction): void => {}
);

commentRouter.post(
  "/update/:_id",
  (req: Request, res: Response, next: NextFunction): void => {}
);

commentRouter.post(
  "/delete/:_id",
  (req: Request, res: Response, next: NextFunction): void => {}
);

export default commentRouter;

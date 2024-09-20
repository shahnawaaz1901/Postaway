import { NextFunction, Request, Response, Router } from "express";
import PostController from "./post.controller";

const postRouter = Router();
const postController: PostController = new PostController();
postRouter.get(
  "/get",
  (req: Request, res: Response, next: NextFunction): void => {}
);
postRouter.get(
  "/getOne/:_id",
  (req: Request, res: Response, next: NextFunction): void => {}
);

postRouter.post(
  "/create",
  (req: Request, res: Response, next: NextFunction): void => {}
);
postRouter.patch(
  "/update/:_id",
  (req: Request, res: Response, next: NextFunction): void => {}
);
postRouter.get(
  "/delete/:_id",
  (req: Request, res: Response, next: NextFunction): void => {}
);

export default postRouter;

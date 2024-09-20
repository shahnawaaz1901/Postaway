import { NextFunction, Request, Response, Router } from "express";

import FriendController from "./friend.controller";
const friendRouter = Router();
const friendController: FriendController = new FriendController();

friendRouter.get(
  "/getAll",
  (req: Request, res: Response, next: NextFunction): any => {}
);
friendRouter.post(
  "/sendRequest/:_id",
  (req: Request, res: Response, next: NextFunction): any => {}
);
friendRouter.post(
  "/acceptRequest/:_id",
  (req: Request, res: Response, next: NextFunction): any => {}
);

friendRouter.post(
  "/rejectRequest/:_id",
  (req: Request, res: Response, next: NextFunction): any => {}
);

export default friendRouter;

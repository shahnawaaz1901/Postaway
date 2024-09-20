import { NextFunction, Request, Response, Router } from "express";
import jwtAuth from "../../middlewares/jwt.auth";
import UserController from "./user.controller";

const userRouter = Router();
const userController: UserController = new UserController();
userRouter.get(
  "/signup",
  (req: Request, res: Response, next: NextFunction): any => {
    return res.status(200).json({ success: true, message: "Success" });
  }
);
userRouter.post(
  "/signup",
  (req: Request, res: Response, next: NextFunction): any => {}
);
userRouter.post(
  "/signup",
  (req: Request, res: Response, next: NextFunction): any => {}
);
userRouter.post(
  "/signup",
  (req: Request, res: Response, next: NextFunction): any => {}
);
userRouter.post(
  "/refresh-token",
  (req: Request, res: Response, next: NextFunction): any => {}
);
userRouter.post(
  "/change-password",
  jwtAuth,
  (req: Request, res: Response, next: NextFunction): any => {}
);
userRouter.get(
  "/forgot-password/sendOtp",
  (req: Request, res: Response, next: NextFunction): any => {}
);
userRouter.post(
  "/forgot-password/validateOtp",
  (req: Request, res: Response, next: NextFunction): any => {}
);
userRouter.post(
  "/forgot-password/reset-password",
  (req: Request, res: Response, next: NextFunction) => {}
);

export default userRouter;

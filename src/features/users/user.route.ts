import { NextFunction, Request, Response, Router } from "express";
import jwtAuth from "../../middlewares/jwt.auth";
import UserController from "./user.controller";
import fileUpload from "../../middlewares/multer.fileUpload";

const userRouter = Router();
const userController: UserController = new UserController();
userRouter.post(
  "/signin",
  (req: Request, res: Response, next: NextFunction): void => {
    userController.signin(req, res, next);
  }
);
userRouter.post(
  "/signup",
  fileUpload.single("profileImage"),
  (req: Request, res: Response, next: NextFunction): void => {
    userController.signup(req, res, next);
  }
);

userRouter.post(
  "/refresh-token",
  (req: Request, res: Response, next: NextFunction): void => {
    userController.refreshToken(req, res, next);
  }
);

userRouter.post(
  "/change-password",
  jwtAuth,
  (req: Request, res: Response, next: NextFunction): void => {
    userController.changePassword(req, res, next);
  }
);

userRouter.get(
  "/forgot-password/sendOtp",
  (req: Request, res: Response, next: NextFunction): void => {
    userController.sentOTP(req, res, next);
  }
);

userRouter.post(
  "/forgot-password/validateOtp",
  (req: Request, res: Response, next: NextFunction): void => {
    userController.validateOTP(req, res, next);
  }
);

userRouter.post(
  "/forgot-password/reset-password",
  (req: Request, res: Response, next: NextFunction): void => {
    userController.resetPassword(req, res, next);
  }
);

export default userRouter;

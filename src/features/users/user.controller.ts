import { NextFunction, Request, Response } from "express";
import UserRepository from "./user.repository";
import ApplicationError from "../../errors/ApplicationError";
import Responses from "../../modules/response";
import { User } from "../../types/user.types";
import bcrypt from "bcrypt";

export default class UserController {
  private userRepository: UserRepository;
  constructor() {
    this.userRepository = new UserRepository();
  }
  async signup(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { name, email, phone, password, age, gender } = req.body;
      const profileImage = req.file?.filename;
      if (
        !name ||
        !email ||
        !phone ||
        !password ||
        !age ||
        !gender ||
        !profileImage
      ) {
        throw new ApplicationError(400, "Enter Require fields !!");
      }
      const newUser: any = await this.userRepository.create({
        ...req.body,
        password: await bcrypt.hash(password, 12),
        profileImage,
      });
      return Responses.generateSuccessResponse(res, 201, {
        user: newUser,
        isAuth: false,
      });
    } catch (error) {
      next(error);
    }
  }

  async signin(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { email = null, password = null } = req.body;
      if (!email || !password) {
        throw new ApplicationError(400, "Enter Required Details !!");
      }
      const user: User | null = await this.userRepository.getUser({ email });
      if (!user) {
        throw new ApplicationError(400, "User not Exist !!");
      }
      const comparePasswordResult: boolean = await bcrypt.compare(
        user.password,
        password
      );
      if (!comparePasswordResult) {
        throw new ApplicationError(401, "Incorrect Password");
      }
    } catch (error) {
      next(error);
    }
  }
  async changePassword(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {}
  async sentOTP(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {}
  async validateOTP(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {}
  async resetPassword(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {}
  async refreshToken(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {}
}

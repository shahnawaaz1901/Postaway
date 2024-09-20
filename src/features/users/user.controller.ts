import { NextFunction, Request, Response } from "express";

export default class UserController {
  async signup(req: Request, res: Response, next: NextFunction): Promise<any> {
    return res.status(200).json({ success: true, message: "Success" });
  }
  async signin(): Promise<any> {}
  async changePassword(): Promise<any> {}
  async sentOTP(): Promise<any> {}
  async validateOTP(): Promise<any> {}
  async resetPassword(): Promise<any> {}
}
